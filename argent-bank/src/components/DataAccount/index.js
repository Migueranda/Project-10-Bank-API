
function DataAccount({ title, amount, description, transactions }){
    return(
        <div>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">{title}</h3>
                    <p className="account-amount">{amount}</p>
                    <p className="account-amount-description">{description}</p>
                </div>
                <div className="account-content-wrapper cta">
                    <button className="transaction-button">{transactions}</button>
                </div>
            </section>
        </div>
    )
}
export default DataAccount