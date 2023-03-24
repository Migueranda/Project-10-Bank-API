import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'
import '../../index.css'
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../../utils/redux'
import { useEffect, useState } from "react";

function FormSignin(){  

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [displayMessage, setdisplayMessage] = useState(false)
    
    //useSelector
    const api_login = useSelector((state) => state.user.api_login);
    const isLogged = useSelector((state) => state.user.signedIn);
    const errorMessage = useSelector((state) => state.user.errorMessage);
    
    // function onSubmit({ username, password }) {
    const handleSubmit = (event) => {
        event.preventDefault(); 
    // récupération des informations du formulaire
        const signInData = {
            email: event.target[0].value, // username
            password: event.target[1].value
        }
    // appel de l'action signIn
        dispatch(signIn(signInData));
    }

    useEffect(()=>{
        if (isLogged) {
            navigate('/User');
        }

        if (errorMessage){
            setdisplayMessage(true) 
        }

        if (api_login === 'pending'){
            // désactiver le bouton "sign in" pendant l'attente de la réponse du serveur
        }

        if (api_login === 'rejected'){
            // afficher un messsage : Communication avec le serveur impossible
        }

        if (api_login === 'fulfilled' && isLogged === false){
            // afficher un message : mauvais mot de passe
        }

    }, [api_login, isLogged])
    
    
    return(
        <main className="main bg-dark" id="bg-dark-modif">
            <section className="sign-in-content">
                <span className="sign-in-icon">< FaUserCircle/> </span>
                <h1>Sign In</h1>
                {/* Affichage de message d'erreur en cas d'erreur */}
                {displayMessage ? (<p className="message_error">* {errorMessage} </p>
                ):(
                    <p></p>
                )}                        
                <form onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button className="sign-in-button" >Sign In</button>        
                </form>
            </section>
        </main>  
    )
}
export default FormSignin
