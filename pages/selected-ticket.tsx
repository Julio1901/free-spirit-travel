'use client'

import styles from "./styles.module.css"
import DefaultTopComponent from "@/components/defaultTopComponent/DefaultTopComponent";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from "@/redux/store";

export default function SelectedTicket(){
    
    return(
        <Provider store={store}>
             <PersistGate loading={null} persistor={persistor}>
                <div className={styles.MainContainer}>
                    <DefaultTopComponent/>
                    <div className={styles.BodyContainer}>
                        <div className={styles.TitleContainer}>
                            <img src="/assets/icons/icon-arrow-back.png"/> 
                            <div className={styles.TitleAndDescriptionContainer}>
                                <div className={styles.TitleContentContainer}>
                                    <p>Lorem ipsum dolor amet consectetur</p>
                                </div>
                                <div className={styles.LocationContainer}>
                                    <img src="/assets/images/map-icon.png" />
                                    <p>GetYourGuide Tours & Tickets GmbH</p>
                                </div>
                            </div>
                          
                        </div> 
                        <div className={styles.ImageContainer} style={{backgroundImage: `url('https://i.postimg.cc/zD6RYYc7/museu-de-arte.jpg')`}}>
                            <div className={styles.DisplayMorePictureButton}>
                                <p>Visualizar mais fotos</p>
                            </div>
                        </div> 
                        <div className={styles.BottomContainer}>
                            <div className={styles.InfosContainer}>
                                <div className={styles.InfosHeaderContainer}>
                                    <div className={styles.ReviewsConteiner}>
                                        <div className={styles.ReviewNoteContainer}>
                                            <p>6.3</p>
                                        </div>
                                        <p className={styles.ReviewDescription}>Excellent</p>
                                        <p className={styles.ReviewsCounter}>(423 Reviews)</p>
                                    </div>
                                    <div className={styles.CommodityContainer}>
                                        <img src="/assets/icons/icon-ticket.png"/> 
                                        <p>Passagem Aérea</p>
                                        <img src="/assets/icons/icon-wifi.png" style={{marginLeft: 14}}/> 
                                        <p>Wi-fi</p>
                                        <img src="/assets/icons/icon-coffe.png" style={{marginLeft: 14}}/> 
                                        <p>Café de manhã</p>
                                        <img src="/assets/icons/icon-house.png" style={{marginLeft: 14}}/> 
                                        <p>Quarto</p>
                                    </div>
                                    <div className={styles.ContentContainer}>
                                        <p className={styles.ContentContainerTitle}>Sobre o Ingresso selecionado:</p>
                                        <p className={styles.ContentContainerDescription}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices feugiat volutpat elementum sed donec bibendum vitae tincidunt. Quis eget ornare amet massa eu at ipsum. Augue purus ante ultrices dictum integer sagittis sem leo. 
                                        Maecenas suspendisse ipsum purus bibendum maecenas faucibus risus, semper. Aliquet potenti neque semper dui aliquet. Imperdiet lectus id sed pharetra nunc, proin. Ultrices varius rhoncus facilisi condimentum habitant rhoncus ac. 
                                        Vivamus varius gravida urna viverra in. Aliquet amet dictum malesuada sapien morbi est interdum. Tincidunt nunc convallis nullam lorem eu elementum interdum. Ut ultrices suscipit dolor lorem consequat ac nibh justo. Viverra quam nunc risus urna. Pharetra vestibulum diam praesent consequat consequat fermentum nunc.
                                        </p>
                                        <p className={styles.ContentContainerTitle} style={{marginTop: 24}}>Localização</p>
                                        <img src="/assets/images/map-image.png" className={styles.LocationMap}/> 
                                    </div>
                                </div>
                            </div>
                            <div className={styles.BuyTicketContainer}>
                                 
                            </div>
                        </div> 
                    </div>
                </div>
             </PersistGate>
        </Provider>
    )
}