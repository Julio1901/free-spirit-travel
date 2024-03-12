import styles from "./styles.module.css"

export default function Cart(){
    return(
        <div className={styles.MainContainer}>
            <div className={styles.TopContentContainer}>
                <p className={styles.Title}>Ingressos</p>
                <div className={styles.TopContentContainerBody}>
                    <img src="/assets/images/profile-image.png" />
                    <div className={styles.TopContentContainerBodyTextsContainer}>
                        <div className={styles.TopContentContainerBodyTextsContainerHeader}>
                            <p className={styles.TicketTitle}>Ingresso Universal 2 park to 2 dias flexivel - 15/09/2022</p>
                            <img src="/assets/icons/icon-garbage.png"/>
                        </div>  
                        <div className={styles.TopContentContainerBodyPricesTextContainer}>
                            <p className={styles.TopContentContainerBodyPricesText}>1 Adulto: R$500,00</p>
                            <p className={styles.TopContentContainerBodyPricesText}>2 Crianças: R$234,330</p>
                        </div>
                       <div className={styles.Divider} style={{marginTop: 8}}/>
                        <div className={styles.QuantityPurchasedContainer}>
                            <p className={styles.QuantityPurchasedContainerTotalText}>Qtd 02</p>
                            <p className={styles.QuantityPurchasedContainerTotalText}>R$ 3.999,00</p>
                        </div>
                        <div className={styles.QuantityPurchasedContainer}>
                            <p className={styles.QuantityPurchasedContainerSubtotalText}>Subtotal</p>
                            <p className={styles.QuantityPurchasedContainerSubtotalTextValue}>R$ 1.468,60</p>
                        </div>


                    </div>
                </div>
            </div>
           <div className={styles.Divider} style={{marginInline: 24}}/>
           <div className={styles.BodyContainer}>
            <div className={styles.BodyTextsContainer}>
                <div className={styles.BodyContentContainer}>
                    <p className={styles.BodyContainerTextNormal}>Ingressos</p>
                    <p className={styles.BodyContainerTextNormal}>R$1.468,60</p>
                </div>
                <div className={styles.BodyContentContainer}>
                    <p className={styles.BodyContainerTextBold}>Subtotal</p>
                    <p className={styles.BodyContainerTextBold}>R$ 1.468,60</p>
                </div>
                <div className={styles.BodyContentContainer}>
                    <p className={styles.BodyContainerTextNormal}>1X de R$1.365,79,00 com desconto de  <span style={{ color: '#00919E' }}>(7%)</span></p>
                    <p className={styles.BodyContainerDiscountText}>-R$102,80</p>
                </div>
                <div className={styles.BodyContentContainer}>
                    <p className={styles.BodyContainerTextNormal}>10X Sem juros de R$1.468,60</p>
                    <p className={styles.BodyContainerTextNormal}>R$1.468,60</p>
                </div>

            </div>

            <div className={styles.Divider} style={{marginTop: 24}}/>
            <div className={styles.TotalValueContainer}>
                <p className={styles.TotalValueContainerText}>Valor total</p>
                <p className={styles.TotalValueContainerPriceText}>1.468,60</p>
            </div>
           </div>
           <div className={styles.GoToCheckOutButtonContainer}>
                <p className={styles.GoToCheckOutButtonText}>Ir para o check out</p>
           </div>
        </div>
    )
}