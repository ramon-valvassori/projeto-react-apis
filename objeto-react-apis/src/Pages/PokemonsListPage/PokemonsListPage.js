import React from "react";
import { PokemonCard } from "../../Components/PokemonCard/PokemonCard";
import { usePokemonList } from "../../hooks/useRequestPokemon";

const PokemonListPage = () => {
  

  const [pokemonList] = usePokemonList();

  //console.log(`pokemonList`, pokemonList);


  const renderPokeList = pokemonList.map((pokemon, i)=>{
    return <PokemonCard key={i} pokemon={pokemon}></PokemonCard>
  })

  return (
    <>
      {renderPokeList}
    </>
  );
};

export default PokemonListPage;