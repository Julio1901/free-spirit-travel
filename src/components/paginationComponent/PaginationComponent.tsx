import React, { useState } from "react"
import styles from "./styles.module.css"

interface IPaginationComponentProps {
    onClick : (pageNumber : string) => void
}

export const PaginationComponent : React.FC<IPaginationComponentProps>= ({onClick}) => {

    const [dropDownIsOpenState, setDropDownIsOpenState] = useState(false)
    const [selectedPage, setSelectedPage] = useState<string >("01");

    const handleWithDropdownClick = () => {
        setDropDownIsOpenState(!dropDownIsOpenState)
    }

    const handleVerticalSelectorClick = (event: React.MouseEvent<HTMLParagraphElement>) => {
        const value = event.currentTarget.innerText;
        const contatenedValue = `0${value}`
        setSelectedPage(contatenedValue)
        onClick(contatenedValue)
    }

    const selectOption = (option: string) => {
        setSelectedPage(option);
        setDropDownIsOpenState(false);
        onClick(option)
      };

    const increasePaginationNumber = () => {
        if(parseInt(selectedPage) >= 3) {
            return
        }

        const page = (parseInt(selectedPage) + 1).toString()
        const contatenedValue = `0${page}`
        setSelectedPage(contatenedValue);
        onClick(contatenedValue)
    }

    const decreasePaginationNumber = () => {
        if(parseInt(selectedPage) <= 1) {
            return
        }
        const page = (parseInt(selectedPage) - 1).toString()
        const contatenedValue = `0${page}`
        setSelectedPage(contatenedValue);
        onClick(contatenedValue)
    }

    const pageNumbers = ["01" , "02", "03"]

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
                            {pageNumbers.map(pageNumber => (
                                    <li key={pageNumber} onClick={() => selectOption(pageNumber)}>
                                    {pageNumber}
                                    </li>
                                ))}
                            </ul>
                    </div>
                )
            }

            <div className={styles.VerticalSelectorContainer}>
                <img src='/assets/icons/icon-arrow-left.png' onClick={decreasePaginationNumber} style={{ cursor: 'pointer' }}/>
                <p onClick={handleVerticalSelectorClick}>1</p>
                <p onClick={handleVerticalSelectorClick}>2</p>
                <p onClick={handleVerticalSelectorClick}>3</p>
                <p style={{cursor: "default"}}>...</p>
                <img src='/assets/icons/icon-arrow-right-filled.png' onClick={increasePaginationNumber} style={{ cursor: 'pointer' }}/>
            </div>
        </div>
    )
}