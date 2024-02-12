'use client'

import { DefaultTopComponent } from "@/components/defaultTopComponent/DefaultTopComponent";
import "./styles/home.css"
import { DefaultSearchComponent } from "@/components/defaultSearchComponent/DefaultSearchComponent";

export default function Home() {

  const handleSearchClicked = (value : string) => {
    console.log(value)
  }

  return (
   <div className="MainContainer">
      <DefaultTopComponent/>
      <DefaultSearchComponent onSearchClicked={ e => handleSearchClicked(e)}/>
   </div>
  );
}
