import { useState } from "react";
import GlobalContext from "./GlobalContext";


const GlobalState = ({children}) => {

    
  

    return(
      <GlobalContext.Provider value={data}>
      {children}
      </GlobalContext.Provider>
    )
}
export default GlobalState