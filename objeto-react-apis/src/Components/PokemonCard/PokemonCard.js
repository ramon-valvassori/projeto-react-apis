import React, { useContext, useEffect, useState } from "react";
import {
  ButtonCapturar,
  ButtonDetail,
  ButtonGroup,
  Card,
  PokemonCardContainerStyled,
  TypesPokeCard,
  TypesPokemon,
} from "./pokemonCardStyle";
import axios from "axios";
import { goToPokedex, goToPokedexDetail } from "../../Routs/coordinator";
import { useLocation, useNavigate } from "react-router-dom";
import marcadagua from "../../assets/marcadagua.png";

import GlobalContext from "../../context/GlobalContext";
import { getTypes } from "../../untils/ReturnPokemonType";
import { getColors } from "../../untils/ReturnCardColor";

export const PokemonCard = ({ pokemon }) => {
  const { newPokemon, setNewPokemon } = useContext(GlobalContext);

  const { setGetPokemon, addPokemonHome } = useContext(GlobalContext);

  const [pokeDate, setPokeDate] = useState([]);

  const [colors, setColors] = useState({});

  

  const navigate = useNavigate();

  const getPokemons = () => {
    axios
      .get(pokemon.url)
      .then((resp) => {
        //console.log(resp.data);

        setPokeDate(resp.data);
        setColors(getColors(resp.data.types[0].type.name));
        
      })
      .catch((erro) => {});
  };
  useEffect(() => {
    getPokemons();
  }, []);

  /* useEffect(() => {
    console.log(types); // isso irá imprimir a lista de tipos do Pokémon no console
  }, [types]); */

  /* const listaPokemon = JSON.stringify(newPokemon);
    localStorage.setItem("lista", listaPokemon); */

  return (
    <PokemonCardContainerStyled>
      {pokeDate.name && (
        <Card color={colors}>
          <div>
            <img
              src={pokeDate.sprites?.other["official-artwork"].front_default}
              alt="imagem do pokemon"
            />
            <img src={marcadagua} className="marcadagua" alt="marcadagua" />
            <p>{`#0${pokeDate.id}`}</p>
            <h1>{pokeDate.name}</h1>
          </div>
          <TypesPokemon>
            {pokeDate.types.map((type) => {
              <TypesPokeCard
                key={type.type.name}
                src={getTypes(type.type.name)}
              />;
              {
              /*  <p>{type.type.name}</p> */
              }
            })}
          </TypesPokemon>

          <ButtonGroup>
            <ButtonDetail
              onClick={() => goToPokedexDetail(navigate, pokeDate.name)}
            >
              Detalhes
            </ButtonDetail>
            <ButtonCapturar
              onClick={() => addPokemonHome(pokeDate.id)}
            ></ButtonCapturar>
          </ButtonGroup>
        </Card>
      )}
    </PokemonCardContainerStyled>
  );
};
