import { useEffect, useState } from "react";
import styles from "./styles.module.css"
import axios from "axios";
import { DOLLAR_EXCHANGE_RATE } from "@/common/network/endpoints";
import { handleWithDollarRattingConverter } from "@/common/utils/priceUtils";
import { connect, useDispatch } from 'react-redux';
import { loginSuccess, logout } from "@/redux/actions";
import { AuthState } from "@/redux/reducer";

interface IDefaultTopComponentProps {
    isLoggedIn: boolean;
}


const DefaultTopComponent: React.FC<IDefaultTopComponentProps>= ({ isLoggedIn }) => {

    const [dollarExchangeRate, setdollarExchangeRate] = useState<IDollarExchangeRate | null>(null);
    const [profilleButtonExpanded, setProfilleButtonExpanded] = useState (false)

    const dispatch = useDispatch();

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

    const handleWithLogin = () => {
     dispatch(loginSuccess());
    }

    const handleWithLogout = () => {
        dispatch(logout());
    }

    const handleWithProfillerButtonClicked = () => {

    }

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

                    {isLoggedIn ? 
                    (   
                        
                        <div className={ profilleButtonExpanded ? styles.LoggedProfileContainerPressed : styles.LoggedProfileContainerNotPressed }>
                            <div className={styles.LoggedProfileContainerPressedHeader} style={profilleButtonExpanded ? {marginTop: 20} : {marginTop: 0}} > 
                                <img src="/assets/images/profile-image.png"/>
                                <p className={styles.LoggedProfilleName}>Amanda Merien</p>
                                <img src="/assets/icons/icon-bottom-arrow-black.png" className={styles.LoggedProfilleBottomArrow}  onClick={() => setProfilleButtonExpanded(!profilleButtonExpanded)}/>
                            </div>
                            <div className={styles.LogouTextButtonContainer}>
                                <p className={styles.LogouTextButton} onClick={handleWithLogout}>logout</p>
                            </div>
                        </div>   
                  
                    ) :
                    (
                        <>
                            <div className={styles.PersonIconContainer} onClick={handleWithLogin}>
                                <img src="/assets/images/person-icon.png"/>
                            </div>
                            <p className={styles.EnterText} onClick={handleWithLogin}>Entrar</p>
                        </>
                    )
                    }
                   
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

const mapStateToProps = (state: AuthState) => ({
    isLoggedIn: state.isLoggedIn,
});

export default connect(mapStateToProps)(DefaultTopComponent);