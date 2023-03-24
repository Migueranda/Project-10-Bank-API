import argentBankLogo from '../../assets/argentBankLogo.png'
import { Link } from 'react-router-dom'
import { FaUserCircle } from "react-icons/fa";
import { signOut } from '../../utils/redux';
import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

function Header({ icon }){

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const signedIn = useSelector((state) => state.user.signedIn);
    const firstName = useSelector((state) => state.user.firstName);

    const handleClick = (event) => {
        event.preventDefault(); 
        dispatch(signOut());
        navigate('/');
    }    

    return(
        <nav className="main-nav">
            <Link className="main-nav-logo" to="/">
                <img className="main-nav-logo-image" src={argentBankLogo} alt="Argent Bank Logo"/>
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>  
                {signedIn ? ( // l'utilisateur est "signed in"
                    <Link className="main-nav-item" to="/" onClick={handleClick}>< FaUserCircle/> {firstName} {icon}  Sign Out</Link>   
                ) : ( // l'utilisateur est "signed out"
                     <Link className="main-nav-item" to="/SigninPage">< FaUserCircle/> {icon} Sign In</Link>  
                )}  
            </div>
        </nav>
    )
}
export default Header
