import styles from "./styles.module.css"

export const DefaultLateralMenu : React.FC = () => {
    return(
        <div className={styles.MainContainer}>
            <div className={styles.HeaderContainer}>
                <p className={styles.Title}>Filtro</p>
                <p className={styles.ButtonText}>Limpar todos os filtros</p>
            </div>
            <div className={styles.Divider} style={{marginTop: 12}}></div>
            <div className={styles.PriceFilterContainer}>
               <p className={styles.PriceTitle}>Preço</p>
               <div className={styles.PriceButtonGroupContainer}>
                    <div className={styles.PriceButtonFilled}>R$ 10,00 - R$ 390,00</div>
                    <div className={styles.PriceButtonNotFilled}>R$ 10,00 - R$ 390,00</div>
                    <div className={styles.PriceButtonNotFilled}>R$ 10,00 - R$ 390,00</div>
                    <div className={styles.PriceButtonNotFilled}>R$ 10,00 - R$ 390,00</div>
               </div>
            </div>
            <div className={styles.Divider} style={{marginTop: 24}}></div>
            <div className={styles.StarFilterContainer}>
                <div className={styles.StarFilterHeaderContainer}>
                    <p className={styles.StarFilterTitle}>Tipo de propriedade</p>
                </div>
                <div className={styles.StarButtonGroupContainer}>
                    <div className={styles.StarButtonSubGroupContainer}>
                        <div className={styles.StarButton}>
                            <img src="/assets/icons/icon-star-filled.png"/> 
                            <img src="/assets/icons/icon-star-filled.png"/> 
                            <img src="/assets/icons/icon-star-filled.png"/> 
                            <img src="/assets/icons/icon-star-filled.png"/> 
                            <img src="/assets/icons/icon-star-filled.png"/> 
                            <p>(134)</p>
                        </div>
                        <div className={styles.StarButton}>
                            <img src="/assets/icons/icon-star-filled.png"/> 
                            <img src="/assets/icons/icon-star-filled.png"/> 
                            <img src="/assets/icons/icon-star-filled.png"/> 
                            <img src="/assets/icons/icon-star-filled.png"/> 
                            <p>(134)</p>
                        </div>
                    </div>
                    <div className={styles.StarButtonSubGroupContainer}>
                        <div className={styles.StarButton}>
                            <img src="/assets/icons/icon-star-filled.png"/> 
                            <img src="/assets/icons/icon-star-filled.png"/> 
                            <img src="/assets/icons/icon-star-filled.png"/> 
                            <p>(134)</p>
                        </div>
                        <div className={styles.StarButton}>
                            <img src="/assets/icons/icon-star-filled.png"/> 
                            <img src="/assets/icons/icon-star-filled.png"/> 
                            <p>(134)</p>
                        </div>
                        <div className={styles.StarButton}>
                            <img src="/assets/icons/icon-star-filled.png"/> 
                            <p>(134)</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.Divider} style={{marginTop: 24}}></div>
            <div className={styles.CommodityContainer}>
                <div className={styles.CommodityHeaderContainer}>
                    <p>Comodidades</p>
                </div>
                <div className={styles.CommodityCheckBoxGroupContainer}>
                    <div className={styles.CheckBoxContainer}>
                        <input type="checkbox"/>
                        <p>Wi-Fi</p>
                    </div>
                    <div className={styles.CheckBoxContainer}>
                        <input type="checkbox"/>
                        <p>Cozinha</p>
                    </div>
                    <div className={styles.CheckBoxContainer}>
                        <input type="checkbox"/>
                        <p>Máquina de Lavar</p>
                    </div>
                    <div className={styles.CheckBoxContainer}>
                        <input type="checkbox"/>
                        <p>Máquina de Lavar</p>
                    </div>
                    <div className={styles.CheckBoxContainer}>
                        <input type="checkbox"/>
                        <p>Secadora</p>
                    </div>
                </div>
            </div>
            <div className={styles.Divider} style={{marginTop: 24}}></div>
            <div className={styles.AccommodationContainer}>
                <div className={styles.AccommodationHeaderContainer}>
                    <p>Tipo de propriedade</p>
                </div>
                <div className={styles.AccommodationCardsContainer}>
                    <div className={styles.AccomodationCardButton}>
                        <img src="/assets/icons/icon-house-not-filled.png"/>
                        <p>Casa (346)</p>
                    </div>
                    <div className={styles.AccomodationCardButton} style={{borderColor:"#CED2DB"}}>
                        <img src="/assets/icons/icon-apartament-not-filled.png"/>
                        <p style={{color:"#CED2DB"}}>Apartamento (234)</p>
                    </div>
                    <div className={styles.AccomodationCardButton} style={{borderColor:"#CED2DB"}}>
                        <img src="/assets/icons/icon-hotel-not-filled.png"/>
                        <p style={{color:"#CED2DB"}}>Hotel (23)</p>
                    </div>
                </div>
            </div>
            <div className={styles.Divider} style={{marginTop: 24}}></div>
            <div className={styles.ReviewContainer}>
                <div className={styles.ReviewHeaderContainer}>
                    <p>Review Score</p>
                </div>
                <div className={styles.ReviewScoreGroup}>
                    <div className={styles.ReviewCardContainer}>
                        <div className={styles.ReviewCardBottomLayer}>
                            <div className={styles.ReviewCardTopLayer} style={{width: 167}}></div>
                        </div>
                        <p>Excelente (543)</p>
                    </div>
                    <div className={styles.ReviewCardContainer}>
                        <div className={styles.ReviewCardBottomLayer}>
                            <div className={styles.ReviewCardTopLayer} style={{width: 149}}></div>
                        </div>
                        <p>Muito bom (543)</p>
                    </div>
                    <div className={styles.ReviewCardContainer}>
                        <div className={styles.ReviewCardBottomLayer}>
                            <div className={styles.ReviewCardTopLayer} style={{width: 117}}>

                            </div>
                        </div>
                        <p>Bom  (543)</p>
                    </div>
                    <div className={styles.ReviewCardContainer}>
                        <div className={styles.ReviewCardBottomLayer}>
                            <div className={styles.ReviewCardTopLayer} style={{width: 97}}>

                            </div>
                        </div>
                        <p>Ruim (543)</p>
                    </div>
                    <div className={styles.ReviewCardContainer}>
                        <div className={styles.ReviewCardBottomLayer}>
                            <div className={styles.ReviewCardTopLayer}>

                            </div>
                        </div>
                        <p>Pessímo (14))</p>
                    </div>
                </div>
            </div>
        </div>
    )
}