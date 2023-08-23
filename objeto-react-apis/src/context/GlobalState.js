import React from 'react';
import { useState } from "react";
import GlobalContext from "./GlobalContext";


function GlobalState (props) {

    const [pokedexDetail, setPokedexDetail] = useState({})
  
    return(
      <GlobalContext.Provider value={{pokedexDetail, setPokedexDetail}}>
      {props.children}
      </GlobalContext.Provider>
    )
}
export default GlobalState