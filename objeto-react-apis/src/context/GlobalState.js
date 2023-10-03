import React from "react";
import { useState } from "react";
import GlobalContext from "./GlobalContext";
import { goToPokedex, goToPokemon } from "../Routs/coordinator";

function GlobalState({children}) {
  const [pokedexDetail, setPokedexDetail] = useState({});

  const [getPokemon, setGetPokemon] = useState("");

  const [newPokemon, setNewPokemon] = useState("");

  const [pokeDate, setPokeDate] = useState([]);

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
    setPokeDate
  };

  return (
    <GlobalContext.Provider value={data}>
      {children}
    </GlobalContext.Provider>
  );
}
export default GlobalState;
