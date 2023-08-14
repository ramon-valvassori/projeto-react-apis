import axios from "axios";
import { BASE_URL } from "../constants/BaseUrl";
import { useEffect, useState } from "react";
import PokemonCard from "../Components/PokemonCard/PokemonCard";
import PokemonListPage from "../Pages/PokemonsListPage/PokemonsListPage";

export const usePokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getPokemon();
  }, []);

  const getPokemon = async () => {
    try {
      const res = await axios.get(`${BASE_URL}pokemon`);
      setPokemonList(res.data.results);
      console.log("Caso de Sucesso", res.data.results);
    } catch (error) {
      console.log(error);
    }
    console.log(pokemonList);
  };
  return pokemonList;
};
