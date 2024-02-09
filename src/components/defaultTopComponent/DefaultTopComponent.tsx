import styles from "./styles.module.css"

export const DefaultTopComponent = () => {
    return(
        <div className={styles.MainContainer}>
            <div className={styles.ContentContainer}>
                <div className={styles.ImageContainer}>
                    <img src="/assets/images/logo.png"/>
                </div>
                <div className={styles.RightContentContainer}>
                      {/* TODO: Remove this harded code and implement external API to get real value */}
                        <p className={styles.Text}>Cotação dólar hoje: R$5,53</p>
                </div>
            </div>
        </div>
    )
}