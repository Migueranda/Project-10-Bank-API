
function featureData({iconName, title, content}){
    return(
       <section >
        <h2 className="sr-only">Features</h2>
            <div className="feature-item">
                <img src={iconName} alt="Chat Icon" className="feature-icon" />
                <h3 className="feature-item-title">{title}</h3>
                <p>{content}</p>
            </div>
       </section> 
    )    
}
export default featureData