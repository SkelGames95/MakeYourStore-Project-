import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { SWRConfig } from "swr";

const fetcher = url=> fetch(url) .then(r => r.json())

export function Router() {

    return(
        <SWRConfig value={{fetcher}}>
           <BrowserRouter>
             <App />
           </BrowserRouter>
        </SWRConfig>
    )
}