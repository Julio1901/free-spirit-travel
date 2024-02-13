import { checkIfPriceValueExists } from "@/common/utils/priceUtils";
import styles from "./styles.module.css"
import { isImagePattern } from '../../common/utils/imageUtils';


interface ICardListDestinationProps {
    name: string;
    location: string;
    image: string;
    description: string;
    price: IPrice;
    rating: IRating
}


export const CardListDestination : React.FC<ICardListDestinationProps> = ({name, location, image, description, price, rating}) => {
    
    const imageUrl = isImagePattern(image) ? image : '/assets/images/image-not-found.png';

    return (
        <div className={styles.MainContainer}>


<div className={styles.ImageContentContainer}>
    <div className={styles.ImageContentContainer} style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className={styles.ImageContentHeaderContainer}>
        <button>Ingresso</button>
        <img src="/assets/icons/icon-heart-not-filled.png" alt="Ícone de coração" />
        </div>
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