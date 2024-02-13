import { useState } from "react"
import styles from "./styles.module.css"

export const PaginationComponent = () => {

    const [dropDownIsOpenState, setDropDownIsOpenState] = useState(false)
    const [selectedPage, setSelectedPage] = useState<string >("1");

    const handleWithDropdownClick = () => {
        setDropDownIsOpenState(!dropDownIsOpenState)
    }

    const selectOption = (option: string) => {
        setSelectedPage(option);
        setDropDownIsOpenState(false);
      };


      const options = ["0" , "1" , "2", "3", "4", "5", "6", "7" , "8" , "9", "10"]

    return(
        <div className={styles.MainContainer}>
            <p className={styles.ResultCounterText}>20 Resultados</p>
            <p className={styles.PageText}>Página:</p>
            { !dropDownIsOpenState ? 
                (<div className={styles.DropDownContainerClosedState} onClick={handleWithDropdownClick}>
                    <p>{selectedPage}</p>
                    <img src="/assets/icons/icon-arrow-bottom.png"/>
                </div>
                ) : (
                    <div className={styles.DropDownContainerOpenState} onClick={handleWithDropdownClick}>
                          <ul className="dropdown-menu">
                            {options.map(option => (
                                    <li key={option} onClick={() => selectOption(option)}>
                                    {option}
                                    </li>
                                ))}
                            </ul>
                    </div>
                )
            
            }
          
        </div>
    )
}