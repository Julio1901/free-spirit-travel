import { checkIfPriceValueExists } from "@/common/utils/priceUtils";
import styles from "./styles.module.css"

interface ICardListDestinationProps {
    name: string;
    location: string;
    image: string;
    description: string;
    price: IPrice;
    rating: IRating
}


export const CardListDestination : React.FC<ICardListDestinationProps> = ({name, location, image, description, price, rating}) => {
    return (
        <div className={styles.MainContainer}>
                <div className={styles.ImageContentContainer} style={{ backgroundImage: `url('${image}')` }}>
                    <div className={styles.ImageContentHeaderContainer} >
                        <button>Ingresso</button>
                        <img src="/assets/icons/icon-heart-not-filled.png"/>
                    </div>
                </div>
            <div className={styles.DestinationInfoContainer}>
                <div className={styles.DestinationInfoContainerContent}>
                    <p className={styles.DestinationTitle}>{name}</p>
                    <div className={styles.DestinationSubTitleContainer}>
                        <img src="/assets/images/map-icon.png"/>
                        <p>GetYourGuide Tours & Tickets GmbH</p>
                    </div>
                    <div className={styles.ReviewsConteiner}>
                        <div className={styles.ReviewNoteContainer}>
                            <p>{rating.value}</p>
                        </div>
                        <p className={styles.ReviewDescription}>Excellent</p>
                        <p className={styles.ReviewsCounter}>({rating.reviewsCount} Reviews)</p>
                    </div>
                </div>
                <div className={styles.Divider}></div>
                <div className={styles.PriceInfoContainer}>
                    <p className={styles.PriceWithoutDiscout}>de R$ {checkIfPriceValueExists(price.full)} por</p>
                    <div className={styles.PriceWithDiscountContainer}> 
                        <p className={styles.MonetarySymbol}>R$</p>
                        {price.discount ? ( <p className={styles.PriceWithDiscount}>{checkIfPriceValueExists(price.discount)}</p>) : 
                        (<p className={styles.PriceWithDiscount} style={{fontSize: 10}}>{checkIfPriceValueExists(price.discount)}</p>)}
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