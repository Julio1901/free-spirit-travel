'use client'

import { DefaultTopComponent } from "@/components/defaultTopComponent/DefaultTopComponent";
import "./styles/home.css"
import { DefaultSearchComponent } from "@/components/defaultSearchComponent/DefaultSearchComponent";
import { CardListDestination } from "@/components/cardListDestination/cardListDestination";

export default function Home() {

  const handleSearchClicked = (value : string) => {
    if(value === ''){
      handleFilterCleaning()
    }
    console.log(value)
  }

  const handleFilterCleaning = () => {
    //TODO 
  }


//TODO delete this
const mockDestinations = [{
    destinationName: "Bali"
},
{
    destinationName: "Thayland"
},
{
    destinationName: "Santa Catarina"
}
]

  
  return (
   <div className="MainContainer">
      <DefaultTopComponent/>
      <DefaultSearchComponent hint="Busque por atração" onSearchClicked={ e => handleSearchClicked(e)}/>
      <div className="BodyContainer">
        <div className="DestinationListConainer">
          <ul>
            {mockDestinations.map((destination, index) => (
              <li key={index}>
                <CardListDestination destinationName={destination.destinationName} imageUrl="https://cloudfront-us-east-1.images.arcpublishing.com/bloomberglinea/OXY3HB37NNASVADO6HXFINNMFE.jpg"/>
              </li>
              ))}
          </ul>
        </div>
      </div>
   </div>
  );
}
