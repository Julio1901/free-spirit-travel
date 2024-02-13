'use client'

import { DefaultTopComponent } from "@/components/defaultTopComponent/DefaultTopComponent";
import "./styles/home.css"
import { DefaultSearchComponent } from "@/components/defaultSearchComponent/DefaultSearchComponent";
import { CardListDestination } from "@/components/cardListDestination/CardListDestination";

import axios from 'axios';
import { useEffect, useState } from "react";
import { TICKETS_ENDPOIN } from "@/common/network/endpoints";
import { PaginationComponent } from "@/components/paginationComponent/PaginationComponent";


export default function Home() {

  const [destinationData, setDestinationData] = useState<ITicket[] | null>(null);
  const [page, setPage] = useState(1)


  const params = {
    page: page,
    limit: 6
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<ITicket[]>(TICKETS_ENDPOIN, { params });
        setDestinationData(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, [page]);

  const handleSearchClicked = (value : string) => {
    if(value === ''){
      handleFilterCleaning()
    }
    console.log(value)
  }

  const handleFilterCleaning = () => {
    //TODO 
  }
  
  const handleWithPaginationClick = (page : string) => {
    setPage(Number(page))
  }

  return (
   <div className="MainContainer">
      <DefaultTopComponent/>
      <DefaultSearchComponent hint="Busque por atração" onSearchClicked={ e => handleSearchClicked(e)}/>
      <div className="BodyContainer">
        <div className="FilterContainer">

        </div>
        <div className="DestinationListConainer">
        <ul>
        {destinationData?.map((destination, index) => (
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
  );
}
