import React from 'react';
import { useState } from "react";
import GlobalContext from "./GlobalContext";
import { goToPokedex, goToPokemon } from '../Routs/coordinator';


function GlobalState (props) {

    const [pokedexDetail, setPokedexDetail] = useState({})

    const [changePage, setChangePage] = useState()

    const [getPokemon, setGetPokemon] = useState()

    const [pokeDate, setPokeDate] = useState({});


  const [newPokemon, setNewPokemon] = useState()

    const addPokemonHome = (id) => {
      setGetPokemon(newPokemon)
    }

      const deletePokemon = () => {
        setNewPokemon()
      }

    const data = {
      getPokemon, 
      setGetPokemon,
      pokedexDetail, 
      setPokedexDetail,
      addPokemonHome,
      deletePokemon,
      setNewPokemon,
      newPokemon,
      setPokeDate,
      pokeDate
    }


    
  
    return(
      <GlobalContext.Provider value={data}>
      {props.children}
      </GlobalContext.Provider>
    )
}
export default GlobalState