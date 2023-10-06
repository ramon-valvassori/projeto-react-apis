import React, { useEffect } from "react";
import { useState } from "react";
import GlobalContext from "./GlobalContext";
import { getColors } from "../untils/ReturnCardColor";
import axios from "axios";
import { usePokemonList } from "../hooks/useRequestPokemon";


function GlobalState({children}) {

 
  const [pokedexDetail, setPokedexDetail] = useState({});

  const [getPokemon, setGetPokemon] = useState("");

  const [newPokemon, setNewPokemon] = useState("");

  const [pokeDate, setPokeDate] = useState([]);

  const [colors, setColors] = useState({});

  const [listPokemon, setListPokemon] = useState([])
  console.log(listPokemon);

  const [pokemonList] = usePokemonList({});

  const renderPokeList = () => {
    
      pokemonList.map((pokemon) => {
        return pokemon={setListPokemon}
      });
  }
    
    
    
//console.log(renderPokeList)
  const getPokemons = () => {
    axios
      .get(listPokemon)
      
      .then((resp) => {
      console.log(renderPokeList);

        setPokeDate(resp.data);
        setColors(getColors(resp.data.types[0].type.name));
        
        
      })
      .catch((err) => {console.log(err)});
  };
  useEffect(() => {
    getPokemons();
  }, []);

  const addPokemonHome = (id) => {
    setGetPokemon(newPokemon, id);
  };

  const deletePokemon = () => {
    setNewPokemon();
  };

  const data = {
    getPokemon,
    setGetPokemon,
    pokedexDetail,
    setPokedexDetail,
    addPokemonHome,
    deletePokemon,
    setNewPokemon,
    newPokemon,
    pokeDate,
    colors,
    /* renderPokeList */
  };

  return (
    <GlobalContext.Provider value={data}>
      {children}
    </GlobalContext.Provider>
  );
  }

export default GlobalState
