import { DefaultTopComponent } from "@/components/defaultTopComponent/DefaultTopComponent";
import "./styles/home.css"
import { DefaultSearchComponent } from "@/components/defaultSearchComponent/DefaultSearchComponent";

export default function Home() {
  return (
   <div className="MainContainer">
      <DefaultTopComponent/>
      <DefaultSearchComponent/>
   </div>
  );
}
