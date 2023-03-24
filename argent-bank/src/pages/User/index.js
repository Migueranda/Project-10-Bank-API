import Header from "../../components/Header"
import Accounts from "../Accounts"
import EditName from "../EditName"
import Footer from "../../components/Footer"
import { FaSignOutAlt } from "react-icons/fa";
import { Provider } from "react-redux";
import { store } from "../../utils/redux";


function User( ){
    return(
        <Provider store={store}>
            <div>
                <Header icon={<FaSignOutAlt/>} />
                <main className="main bg-dark">
                    <EditName/>
                    <Accounts />
                </main>
                <Footer/>
            </div>
        </Provider>    
        )
}
export default User