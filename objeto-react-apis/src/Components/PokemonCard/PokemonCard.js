import React from "react";
import { usePokemonList } from "../../hooks/useRequestPokemon";

export const PokemonCard = () => {
  const [pokemonList] = usePokemonList();

  

  return (
    <FeedContainerStyled>
    {pokemonList
    .slice(0, 20)
    .map((pokemon, i) => (
      <RecipeCardStyled key={i}> 
      <img src={pokemon.url} alt="imagem do pokemon"/>
      <h3>{pokemon.name}</h3>
      </RecipeCardStyled>   
          ))};
          </FeedContainerStyled>
  );
};
