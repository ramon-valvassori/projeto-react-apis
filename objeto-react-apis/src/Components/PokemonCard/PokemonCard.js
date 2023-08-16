import React, { useEffect, useState } from "react";
import { usePokemonList } from "../../hooks/useRequestPokemon";
import {
  PokemonCardContainerStyled,
  RecipeCardStyled,
} from "./pokemonCardStyle";
import axios from "axios";

export const PokemonCard = () => {
  const [pokemonList] = usePokemonList();
  const [pok, setPok] = useState();

  const card = () => {
    pokemonList.slice(0, 20).map((pokemon, i) => {
      axios
        .get(pokemon.url)
        .then((resp) => {
          setPok(resp.data)
          console.log('Estamos aqui', resp.data.sprites.other.home.front_default);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  useEffect(() => {
    card()
  }, []);
  
  useEffect(() => {
    console.log(pok);
  }, [setPok]);
  
  return (
    <PokemonCardContainerStyled>
      {pokemonList.slice(0, 20).map((pokemon, i) => {
        axios
          .get(pokemon.url)
          .then((resp) => {
            //console.log(resp.data.sprites.other.home.front_default);
          })
          .catch((error) => {
            console.log(error);
          });
        //console.log(pokemon.url);

        return (
          <RecipeCardStyled key={i}>
            <h3>{pokemon.name}</h3>
            <img
             
              alt="imagem do pokemon"
            />
          </RecipeCardStyled>
        );
      })}
    </PokemonCardContainerStyled>
  );
};
