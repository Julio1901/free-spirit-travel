import styles from "./styles.module.css"

interface ICardListDestinationProps {
    destinationName: string;
    imageUrl: string;
}


export const CardListDestination : React.FC<ICardListDestinationProps> = ({destinationName, imageUrl}) => {
    return (
        <div className={styles.MainContainer}>
                <div className={styles.ImageContentContainer} style={{ backgroundImage: `url('${imageUrl}')` }}>
                    <div className={styles.ImageContentHeaderContainer} >
                        <button>Ingresso</button>
                        <img src="/assets/icons/icon-heart-not-filled.png"/>
                    </div>
                </div>
            <div className={styles.DestinationInfoContainer}>
                <div className={styles.DestinationInfoContainerContent}>
                    <p className={styles.DestinationTitle}>Lorem ipsum dolor amet consectetur</p>
                    <div className={styles.DestinationSubTitleContainer}>
                        <img src="/assets/images/map-icon.png"/>
                        <p>GetYourGuide Tours & Tickets GmbH</p>
                    </div>
                    <div className={styles.ReviewsConteiner}>
                        <div className={styles.ReviewNoteContainer}>
                            <p>6.3</p>
                        </div>
                        <p className={styles.ReviewDescription}>Excellent</p>
                        <p className={styles.ReviewsCounter}>(423 Reviews)</p>
                    </div>
                </div>
                <div className={styles.Divider}></div>
                <div className={styles.PriceInfoContainer}>
                    <p className={styles.PriceWithoutDiscout}>de R$ 2.351,28 por</p>
                    <div className={styles.PriceWithDiscountContainer}> 
                        <p className={styles.MonetarySymbol}>R$</p>
                        <p className={styles.PriceWithDiscount}>1.391,28</p>
                    </div>
                   <div className={styles.PriceInfoContainerButton}>
                        <p>Saber mais</p>
                        <img src="/assets/icons/icon-arrow-right.png"/>
                   </div>
                </div>
            </div>
            
        </div>
    )   
}