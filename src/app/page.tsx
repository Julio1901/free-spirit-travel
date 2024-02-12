'use client'

import { DefaultTopComponent } from "@/components/defaultTopComponent/DefaultTopComponent";
import "./styles/home.css"
import { DefaultSearchComponent } from "@/components/defaultSearchComponent/DefaultSearchComponent";
import { CardListDestination } from "@/components/cardListDestination/CardListDestination";

import axios from 'axios';
import { useEffect, useState } from "react";
import { TICKETS_ENDPOIN } from "@/common/network/endpoints";


export default function Home() {

  const [destinationData, setDestinationData] = useState<ITicket[] | null>(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<ITicket[]>(TICKETS_ENDPOIN);
        setDestinationData(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
    console.log("test")
    console.log(destinationData)
  }, []);







  const handleSearchClicked = (value : string) => {
    if(value === ''){
      handleFilterCleaning()
    }
    console.log(value)
  }

  const handleFilterCleaning = () => {
    //TODO 
  }
  
  return (
   <div className="MainContainer">
      <DefaultTopComponent/>
      <DefaultSearchComponent hint="Busque por atração" onSearchClicked={ e => handleSearchClicked(e)}/>
      <div className="BodyContainer">
        <div className="DestinationListConainer">
        <ul>
        {destinationData?.map((destination, index) => (
          <li key={index}>
            {/* Passando as props para o componente CardListDestination */}
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
   </div>
  );
}
