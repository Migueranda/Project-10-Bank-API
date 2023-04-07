import DataAccount from '../../components/DataAccount'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';


function Accounts(){

    const isLogged = useSelector((state) => state.user.signedIn)
    const navigate = useNavigate()

    // sécurtié : afin d'empécher un visiteur non identifié de visualiser la page transaction
    useEffect(() => {   
            if ( isLogged === false){
                navigate('/SigninPage')
            }
        }, [])

    // Argent Bank Checking
    let titleBankChecking  = ' Argent Bank Checking (x8349)'
    let amountBankChecking  = ' $2,082.79'
    let descriptionBankChecking  = 'Available Balance'
    let transactionsBankChecking  = ' View transactions'

    // Argent Bank Savings
    let titleBankSavings = 'Argent Bank Savings (x6712)'
    let amountBankSavings = ' $10,928.42'
    let descriptionBankSavings ='Available Balance'
    let transactionBankSavings =' View transactions'

    // Argent Bank Credit Card
    let titleBankCreditCard = ' Argent Bank Credit Card'
    let amountBankCreditCard = '$184.30'
    let descriptionBankCreditCard = 'Current Balance'
    let transactionBankCreditCard = 'View transactions'

    return(
        <div>
            <h2 className="sr-only">Accounts</h2>
            <DataAccount title ={titleBankChecking} amount={amountBankChecking} description={descriptionBankChecking} transactions={transactionsBankChecking} />
            <DataAccount title ={titleBankSavings} amount={amountBankSavings} description={descriptionBankSavings} transactions={transactionBankSavings}  />
            <DataAccount title ={titleBankCreditCard} amount={amountBankCreditCard} description={descriptionBankCreditCard} transactions={transactionBankCreditCard}  />
        </div>
    )
}
export default Accounts