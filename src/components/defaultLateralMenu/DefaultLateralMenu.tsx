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
        
           
        </div>
    )
}