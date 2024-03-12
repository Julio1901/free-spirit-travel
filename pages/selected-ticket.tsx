'use client'

import styles from "./styles.module.css"
import DefaultTopComponent from "@/components/defaultTopComponent/DefaultTopComponent";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from "@/redux/store";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import { TICKETS_ENDPOIN } from "@/common/network/endpoints";
import { TICKETS_LIST_LIMIT } from "@/common/network/paginationLimitValues";

export default function SelectedTicket(){

    const [destinationData, setDestinationData] = useState<ITicket | null>(null);
    const router = useRouter();
    const { ticketName } = router.query;

    const makeTicketRequest = () => {

        if (ticketName === undefined) {
            return
        }
        
        let params = {
            search: ticketName,
            limit: TICKETS_LIST_LIMIT
        }
        const fetchData = async () => {
            try {
                const response = await axios.get<ITicket[]>(TICKETS_ENDPOIN, { params });
                setDestinationData(response.data[0]);
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        };
        fetchData();
      }
    
      useEffect(() => {
        makeTicketRequest()
      }, [ticketName]);

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
                                    <p>{destinationData?.name}</p>
                                </div>
                                <div className={styles.LocationContainer}>
                                    <img src="/assets/images/map-icon.png" />
                                    <p>{destinationData?.location}</p>
                                </div>
                            </div>
                          
                        </div> 
                        <div className={styles.ImageContainer} style={{backgroundImage: `url(${destinationData?.image})`}}>
                            <div className={styles.DisplayMorePictureButton}>
                                <p>Visualizar mais fotos</p>
                            </div>
                        </div> 
                        <div className={styles.BottomContainer}>
                            <div className={styles.InfosContainer}>
                                <div className={styles.InfosHeaderContainer}>
                                    <div className={styles.ReviewsConteiner}>
                                        <div className={styles.ReviewNoteContainer}>
                                            <p>{destinationData?.rating.value}</p>
                                        </div>
                                        <p className={styles.ReviewDescription}>Excellent</p>
                                        <p className={styles.ReviewsCounter}>({destinationData?.rating.reviewsCount} Reviews)</p>
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
                                        <p className={styles.ContentContainerDescription}>{destinationData?.description}</p>
                                        <p className={styles.ContentContainerTitle} style={{marginTop: 24}}>Localização</p>
                                        <img src="/assets/images/map-image.png" className={styles.LocationMap}/> 
                                    </div>
                                </div>
                            </div>
                            <div className={styles.BuyTicketContainer}>
                                <div className={styles.BuyTicketCardInfo} style={{marginTop:24}}>
                                    <img src="/assets/icons/icon-callendar-not-filled.png"/> 
                                    <div className={styles.BuyTicketCardInfoContent}>
                                        <div className={styles.BuyTicketTextContainer}>
                                            <div className={styles.BuyIndividualTextContainer}>
                                            <p className={styles.BuyTicketCardInfoContentTitle}>Data do Ingresso</p>
                                            </div>
                                            <div className={styles.BuyIndividualTextContainer}> 
                                                <p className={styles.BuyTicketCardInfoContentSubTitle}>22/12/2022</p>
                                            </div>
                                        </div>
                                        <img src="/assets/icons/icon-bottom-arrow-black.png" style={{alignSelf: "center", marginLeft: "auto"}}/> 
                                    </div>
                                </div>
                                <div className={styles.Divider}></div>
                                <div className={styles.BuyTicketCardInfo} style={{marginTop:24}}>
                                    <img src="/assets/icons/icon-callendar-not-filled.png"/> 
                                    <div className={styles.BuyTicketCardInfoContent}>
                                        <div className={styles.BuyTicketTextContainer}>
                                            <div className={styles.BuyIndividualTextContainer}>
                                            <p className={styles.BuyTicketCardInfoContentTitle}>Ingressos</p>
                                            </div>
                                            <div className={styles.BuyIndividualTextContainer}> 
                                                <p className={styles.BuyTicketCardInfoContentSubTitle}>03 Ingressos</p>
                                            </div>
                                        </div>
                                        <img src="/assets/icons/icon-bottom-arrow-black.png" style={{alignSelf: "center", marginLeft: "auto"}}/> 
                                    </div>
                                </div>
                                <div className={styles.Divider}></div>
                                <div className={styles.BuyResumeContainer}>
                                    <div className={styles.BuyResumeContentContainer}>
                                        <p>01 Ingresso infantil</p>
                                        <p className={styles.BuyResumeContentPrice}>R$245,99</p>
                                    </div>
                                    <div className={styles.BuyResumeContentContainer}>
                                        <p>02 Ingressos Adultos</p>
                                        <p className={styles.BuyResumeContentPrice}>R$245,99</p>
                                    </div>
                                </div>
                                <div className={styles.Divider}></div>
                                <div className={styles.BuyResumePriceContainer}>
                                    <p className={styles.BuyResumePriceTitle}>Valor total</p>
                                    <p className={styles.BuyResumePriceText}>R$ {destinationData?.price.discount}</p>
                                </div>
                                <div className={styles.BuyButton}>
                                    <p>Comprar Ingresso</p>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
             </PersistGate>
        </Provider>
    )
}