import React, { useState } from "react";
import { BASE_URL } from '../constants/BaseUrl'
import { useEffect } from "react";
import axios from 'axios'


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
        //console.log(res.data.results);
        //console.log("Caso de Sucesso", res.data.results);
      } catch (error) {
        console.log(error);
      }
}
 return [pokemonList]

}
  