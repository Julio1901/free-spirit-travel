'use client'

import { DefaultTopComponent } from "@/components/defaultTopComponent/DefaultTopComponent";
import "./styles/home.css"
import { DefaultSearchComponent } from "@/components/defaultSearchComponent/DefaultSearchComponent";

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

  return (
   <div className="MainContainer">
      <DefaultTopComponent/>
      <DefaultSearchComponent hint="Busque por atração" onSearchClicked={ e => handleSearchClicked(e)}/>
   </div>
  );
}
