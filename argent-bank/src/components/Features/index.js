import iconChat from '../../assets/icon-chat.png'
import iconMoney from '../../assets/icon-money.png'
import iconSecurity from '../../assets/icon-security.png'
import FeatureData from '../FeatureData'


function Features(){
    
    let titleChat= 'You are our #1 priority'
    let contentChat= "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
   
    let titleMoney= 'More savings means higher rates'
    let contentMoney='The more you save with us, the higher your interest rate will be!'

    let titleSecurity='Security you can trust'
    let contentSecurity='We use top of the line encryption to make sure your data and money is always safe.'

    return(
        <section className="features">
            <FeatureData  title={titleChat} iconName={iconChat} content={contentChat}/>
            <FeatureData  title={titleMoney} iconName={iconMoney} content={contentMoney}/>
            <FeatureData  title={titleSecurity} iconName={iconSecurity} content={contentSecurity}/>
        </section>
    )
}
export default Features
