'use client'

import DefaultTopComponent from "@/components/defaultTopComponent/DefaultTopComponent";
import "./styles/home.css"
import { DefaultSearchComponent } from "@/components/defaultSearchComponent/DefaultSearchComponent";
import { CardListDestination } from "@/components/cardListDestination/CardListDestination";
import axios from 'axios';
import { useEffect, useState } from "react";
import { TICKETS_ENDPOIN } from "@/common/network/endpoints";
import { PaginationComponent } from "@/components/paginationComponent/PaginationComponent";
import { TICKETS_LIST_LIMIT } from "@/common/network/paginationLimitValues";
import { DefaultLateralMenu } from "@/components/defaultLateralMenu/DefaultLateralMenu";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from "@/redux/store";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Cart from "@/components/cart/Cart";


export default function Home() {

  const [destinationData, setDestinationData] = useState<ITicket[] | null>(null);
  const [page, setPage] = useState(1)
  const [ticket, setTicket] = useState<ITicket | null>(null);

  const router = useRouter();

  const makeTicketRequest = (ticketName : string | null = null) => {
    let params = {};
    
    if (ticketName === null){
       params = {
        page: page,
        limit: TICKETS_LIST_LIMIT
      }

    }
    else{
       params = {
        search: ticketName,
        limit: TICKETS_LIST_LIMIT
      }
    }
    
    const fetchData = async () => {
      try {
        const response = await axios.get<ITicket[]>(TICKETS_ENDPOIN, { params });
        setDestinationData(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }

  useEffect(() => {
    makeTicketRequest()
  }, [page]);

  const handleSearchClicked = (value : string) => {
    if(value === ''){
      handleFilterCleaning()
      return
    }
      makeTicketRequest(value)
  }

  const handleFilterCleaning = () => {
    makeTicketRequest()
  }
  
  const handleWithPaginationClick = (page : string) => {
    setPage(Number(page))
  }

  const handleWithTicketClick = (destination: ITicket) => {
    setTicket(destination)
    router.push(
      '/selected-ticket'
    );
  }



const mock = [

    {
      "id": "1",
      "name": "Museu de Arte Moderna",
      "location": "Rio de Janeiro, RJ",
      "image": "https://i.postimg.cc/zD6RYYc7/museu-de-arte.jpg",
      "description": "O Museu de Arte Moderna é um espaço cultural dedicado à exibição de obras de arte moderna e contemporânea, destacando-se pela diversidade de artistas e estilos.",
      "price": {
        "full": 2351.28,
        "discount": 1391.28
      },
      "rating": {
        "reviewsCount": 345,
        "value": 4.3
      },
      "createdAt": "2022-08-31T12:32:09.794Z",
      "updatedAt": "2022-08-31T12:32:09.794Z"
    },
    {
      "id": "2",
      "name": "Torre Eiffel",
      "location": "Paris, França",
      "image": "https://i.postimg.cc/JhFkqsSN/torre-eiffel.jpg",
      "description": "A Torre Eiffel é um ícone da arquitetura mundial, situada em Paris, oferecendo uma vista deslumbrante da cidade luz a partir de seus diferentes níveis.",
      "price": {
        "full": 2351.28,
        "discount": 1391.28
      },
      "rating": {
        "reviewsCount": 345,
        "value": 4.3
      },
      "createdAt": "2022-08-31T12:32:09.794Z",
      "updatedAt": "2022-08-31T12:32:09.794Z"
    }
]

  return (
    <Provider store={store}>
         <PersistGate loading={null} persistor={persistor}>
         <div className="MainContainer">
      <DefaultTopComponent/>
      <Cart items={mock}/>
      <DefaultSearchComponent hint="Busque por atração" onSearchClicked={ e => handleSearchClicked(e)}/>
      <div className="BodyContainer">
        <div className="LateralMenuContainer">
          <DefaultLateralMenu/>
        </div>
        <div className="DestinationListConainer">
          <ul>
            {destinationData?.map((destination, index) => (
              <Link href={
                {pathname: '/selected-ticket',
                query: {
                  ticketName: destination.name
                }
                }
              }>
                <li key={index}>
                  <CardListDestination
                    name={destination.name}
                    image={destination.image}
                    location={destination.location}
                    description={destination.description}
                    price={destination.price}
                    rating={destination.rating}
                  />
            
                  </li>
              </Link>
          
            ))}
          </ul>
        </div>
      </div>
      <div className="FootContainer">
        <div className="PaginationComponentContainer">
          <PaginationComponent onClick={(e) => handleWithPaginationClick(e)}/>
        </div>
          
      </div>
   </div>
         </PersistGate>
    </Provider>
  );
}
