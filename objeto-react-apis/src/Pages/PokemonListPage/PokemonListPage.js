import { usePokemonList } from "../../hooks/useRequestPokemon";
import Header from "../../Components/Header/Header";
import { RenderList } from "./pokemonListPageStyle";
import { PokemonCard } from "../../Components/PokemonCard/PokemonCard";

const PokemonListPage = () => {
  
  const [pokemonList] = usePokemonList();

  const renderPokeList = pokemonList.map((pokemon) => {
    return pokemon
  }); 

console.log(renderPokeList);

  return (
    <>
      <Header />
      <RenderList>{renderPokeList}</RenderList>
    </>
  );
};

export default PokemonListPage;
