import styles from "./styles.module.css"

export const DefaultTopComponent = () => {
    return(
        <div className={styles.MainContainer}>
            <div className={styles.ContentContainer}>
                <div className={styles.LogoContainer}>
                    <img src="/assets/images/logo.png"/>
                </div>
                <div className={styles.RightContentContainer}>
                    <p className={styles.DollarDescriptionText}>Cotação dólar hoje: R$5,53</p>
                    <div className={styles.FlagContainer}>
                        <img src="/assets/images/brazil-flag.png"/>
                    </div>
                    <div className={styles.QuestionBallonContainer}>
                        <img src="/assets/images/question-ballon.png"/>
                    </div>
                    <div className={styles.Divider}></div>
                    <div className={styles.PersonIconContainer}>
                        <img src="/assets/images/person-icon.png"/>
                    </div>
                    <p className={styles.EnterText}>Entrar</p>
                    <div className={styles.ShoppingButtonContainer}>

                    </div>
                </div>
            </div>
        </div>
    )
}