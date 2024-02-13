import styles from "./styles.module.css"

export const DefaultLateralMenu : React.FC = () => {
    return(
        <div className={styles.MainContainer}>
            <div className={styles.HeaderContainer}>
                <p className={styles.Title}>Filtro</p>
                <p className={styles.ButtonText}>Limpar todos os filtros</p>
            </div>

            <div className={styles.Divider} style={{marginTop: 12}}></div>
           
        </div>
    )
}