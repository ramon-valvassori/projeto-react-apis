import React, { useContext, useEffect, useState } from "react";
import {
  PokemonCardContainerStyled,
  RecipeCardStyled,
} from "./pokemonCardStyle";
import axios from "axios";
import { goToPokedexDetail } from "../../Routs/coordinator";
import { useNavigate } from "react-router-dom";

export const PokemonCard = ({ pokemon }) => {
  const [newPokemon, setNewPokemon] = useState();

  /* const context = useContext(GlobalContext)
  const { addPokemon } = context; */

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(pokemon.url)
      .then((resp) => {
        setNewPokemon(resp.data);
      })
      .catch((erro) => {});
  }, []);

   const addPokemonHome = () => {
    const listaPokemon = JSON.stringify(newPokemon);
    localStorage.setItem("lista", listaPokemon);
   } 
  
  return (
    <PokemonCardContainerStyled>
      {newPokemon && (
        <RecipeCardStyled>
          <h3>{newPokemon.name}</h3>
          <img
            src={newPokemon.sprites.other.home.front_default}
            alt="imagem do pokemon"
            />
            <button onClick={addPokemonHome}>Adicionar</button>
            
          
          <button onClick={() => goToPokedexDetail(navigate, newPokemon.name)}>
            Detalhes
          </button>
        </RecipeCardStyled>
      )}
    </PokemonCardContainerStyled>
  );
};
