import { useDispatch } from 'react-redux'
import { getProfile } from '../../utils/redux'
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { setProfile } from '../../utils/redux';

function EditName(){
    
    const isLogged = useSelector((state) => state.user.signedIn)
    const userToken = useSelector((state) => state.user.token)
    const api_profil = useSelector((state) => state.user.api_profil)
    const getProfileExec =  useSelector((state) => state.user.getProfileExec)
    const firstName =  useSelector((state) => state.user.firstName)
    const lastName =  useSelector((state) => state.user.lastName)
    const profileChanged = useSelector((state) => state.user.profileChanged)

    const [editUserName, setEditUserName] = useState(false)
    const dispatch = useDispatch()

    // gère le  sauvegarde de donné via le boutton "Save" du formulaire
    const handleSave = (event) => {
        event.preventDefault(); 
    // récupération des informations du formulaire
        const userData = {
            firstName: event.target.form[0].value, // username
            lastName: event.target.form[1].value,
            token: userToken
        }  
        dispatch(setProfile(userData));       
    } 

    // gère le defaultValue du champ input
    const handleCancel = (event) => {
        event.preventDefault();
        setEditUserName(false)
    }
     // gère le bouton "Edit Name"
    const handleEditName = (event) => {
        event.preventDefault();
        setEditUserName(true)
    }
    
    if(isLogged && getProfileExec === false){
        dispatch(getProfile(userToken))
    }

    useEffect(() => {

        if(profileChanged){
            setEditUserName(false) 
        }
                
        
    }, [ profileChanged])  

    return(
        <>
            {api_profil === 'pending' ? (
            <div className="header"> 
                <h1>... Loading</h1>
            </div>
            ) : (
            <div className="header">
                { !editUserName ? ( // Edition des informations de l'utilisateur : FALSE
                <div>
                    <h1>Welcome back<br />{firstName} {lastName}</h1>                                   
                    <button className="edit-button" onClick={handleEditName}>Edit Name</button>
                </div>
                ):( // Edition des informations de l'utilisateur : TRUE
                <form>
                    <h1>Welcome back<br /></h1>
                    <div className="input-container">
                        <div className='input-username'>
                            <label htmlFor="username"></label>
                            <input type="text" id="username" defaultValue={firstName}/>
                        </div>                         
                        <div className='input-lastName'>
                            <label htmlFor="lastname"></label>
                            <input type="lastname" id="lastname" defaultValue={lastName}/>
                        </div>
                    </div>
                    <div className='container-save-cancel'>
                        <div className="input-save">
                            <button id='input-save' onClick={handleSave} >save</button>
                        </div>
                        <div className="input-cancel">
                            <button id='input-cancel' onClick={handleCancel}>Cancel</button>
                        </div> 
                    </div>    
                 </form>
                )}           
            </div> 
            )}
        </>   
    )
}
export default EditName