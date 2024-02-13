import { useState } from "react"
import styles from "./styles.module.css"

export const PaginationComponent = () => {

    const [dropDownIsOpenState, setDropDownIsOpenState] = useState(false)
    const [selectedPage, setSelectedPage] = useState<string >("1");

    const handleWithDropdownClick = () => {
        setDropDownIsOpenState(!dropDownIsOpenState)
    }

    const handleVerticalSelectorClick = (event: React.MouseEvent<HTMLParagraphElement>) => {
        const value = event.currentTarget.innerText;
        setSelectedPage(value)
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

            <div className={styles.VerticalSelectorContainer}>
                <img src='/assets/icons/icon-arrow-left.png'/>
                <p onClick={handleVerticalSelectorClick}>1</p>
                <p onClick={handleVerticalSelectorClick}>2</p>
                <p onClick={handleVerticalSelectorClick}>3</p>
                <p style={{cursor: "default"}}>...</p>
                <img src='/assets/icons/icon-arrow-right-filled.png'/>
            </div>
          
        </div>
    )
}