import Header from '../../components/Header'
import FormSignin  from '../FormSignin'
import Footer from '../../components/Footer'
import { Provider } from 'react-redux'
import { store } from '../../utils/redux'

function SigninPage(){
    return(
        <Provider store={store}>
            <div>
                <Header/>
                <FormSignin/>
                <Footer />
            </div>
       </Provider>
    )
}
export default SigninPage