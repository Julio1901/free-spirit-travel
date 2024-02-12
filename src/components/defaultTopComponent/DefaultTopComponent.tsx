import { useEffect, useState } from "react";
import styles from "./styles.module.css"
import axios from "axios";
import { DOLLAR_EXCHANGE_RATE } from "@/common/network/endpoints";
import { checkIfPriceValueExists, handleWithDollarRattingConverter } from "@/common/utils/priceUtils";

export const DefaultTopComponent = () => {

    const [dollarExchangeRate, setdollarExchangeRate] = useState<IDollarExchangeRate | null>(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get<IDollarExchangeRate>(DOLLAR_EXCHANGE_RATE);
          setdollarExchangeRate(response.data);
        } catch (error) {
          console.error('Erro ao buscar dados:', error);
        }
      };
  
      fetchData();
      console.log('test')
      console.log(dollarExchangeRate)
    }, []);

    return(
        <div className={styles.MainContainer}>
            <div className={styles.ContentContainer}>
                <div className={styles.LogoContainer}>
                    <img src="/assets/images/logo.png"/>
                </div>
                <div className={styles.RightContentContainer}>
                    <p className={styles.DollarDescriptionText}>Cotação dólar hoje: R${handleWithDollarRattingConverter(dollarExchangeRate?.USDBRL.high)}</p>
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
                        <img src="/assets/images/shop-fill-icon.png"/>
                        <div className={styles.ItemShoppingCounterContainer}>
                            <p>0</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}