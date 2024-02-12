import styles from "./styles.module.css"

export const DefaultSearchComponent = () => {
    return(
        <div className={styles.MainContainer}>
            <div className={styles.InputContainer}>
                <div className={styles.MapIconContainer}>
                    <img src="/assets/images/map-icon.png"/>
                </div>
                <input type="text" placeholder="Busque por atração" />
                <div className={styles.SearchIconContainer} data-testid="id-search-icon-container">
                    <img src="/assets/images/search-icon.png" alt="Search Icon"/>
                </div>
            </div>
        </div>
    )
}