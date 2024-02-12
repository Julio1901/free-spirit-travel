import { useState } from "react";
import styles from "./styles.module.css"

interface IDefaultSearchComponentProps {
    onSearchClicked : (value: string) => void
}

export const DefaultSearchComponent: React.FC<IDefaultSearchComponentProps> = ({onSearchClicked}) => {

    const [searchText, setSearchText] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value);
    };


    const handleSearchClick = () => {
        onSearchClicked(searchText);
    };


    return(
        <div className={styles.MainContainer}>
            <div className={styles.InputContainer}>
                <div className={styles.MapIconContainer}>
                    <img src="/assets/images/map-icon.png"/>
                </div>
                <input type="text" placeholder="Busque por atração" onChange={handleInputChange}/>
                <div className={styles.SearchIconContainer} data-testid="id-search-icon-container" onClick={handleSearchClick}>
                    <img src="/assets/images/search-icon.png" alt="Search Icon"/>
                </div>
            </div>
        </div>
    )
}