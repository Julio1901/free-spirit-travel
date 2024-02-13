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
        </div>
    )
}