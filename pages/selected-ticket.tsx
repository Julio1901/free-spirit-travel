import DefaultTopComponent from "@/components/defaultTopComponent/DefaultTopComponent";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from "@/redux/store";

export default function SelectedTicket(){
    
    return(
        <Provider store={store}>
             <PersistGate loading={null} persistor={persistor}>
                <div>
                    <h1>Selected ticket page</h1>
                    <DefaultTopComponent/>
                </div>
             </PersistGate>
        </Provider>
    )
}