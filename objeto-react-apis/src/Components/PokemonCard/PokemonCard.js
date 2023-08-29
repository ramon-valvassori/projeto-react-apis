import React, { useContext, useEffect, useState } from "react";
import {
  ButtonCapturar,
  ButtonDetail,
  ButtonGroup,
  Card,
  PokemonCardContainerStyled,
  PokemonName,
  PokemonType,
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
import pokemons from "../../pokemon/pokemons.json";

export const PokemonCard = ({ pokemon }) => {
  const { newPokemon, setNewPokemon } = useContext(GlobalContext);

  const { setGetPokemon, addPokemonHome } = useContext(GlobalContext);

  const { pokeDate, setPokeDate } = useContext(GlobalContext);

  const navigate = useNavigate();

  const getPokemons = () => {
    axios
      .get(pokemon.url)
      .then((resp) => {
       // console.log(resp.data);

        setPokeDate(resp.data);
      })
      .catch((erro) => {});
  };
  useEffect(() => {
    getPokemons();
  }, []);

  /* const listaPokemon = JSON.stringify(newPokemon);
    localStorage.setItem("lista", listaPokemon); */

  return (
    <PokemonCardContainerStyled>
      {pokeDate.name && (
        <Card color={getColors(pokeDate.id)}>
          <img
            src={pokeDate.sprites?.other["official-artwork"].front_default}
            alt="imagem do pokemon"
          />
          <img src={marcadagua} className="marcadagua" alt="marcadagua" />
          <p>{`#0${pokeDate.id}`}</p>
          <h1>{pokeDate.name}</h1>
          <TypesPokemon>
            {pokemons.map((type) => {
            return <PokemonType key={type} src={getTypes(type)} alt='' />
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

{
  /* <div className='LeftCard'>
        <span>#</span>
        <h2>name</h2>
        <div className='Frames'>
          <img src={Grass} alt="" />
          <img src={Frame2} alt="" />
        </div>
        <button onClick={() => goToPokemonDetailsPage(navigate, pokemon.name)}  >Detalhes</button>
      </div> 
      <div className='RightCard'>
        <img className='MarcaDgua' src={pngwing2} alt="" />
        <img className='Pokemon' src={imagem3} alt="pokemon.name" />
        {location.pathname === "/" ? (
          <button onClick={() => addToPokedex(pokemon)} className='BtnCapturar'>Capturar!</button>
        ) : (
          <button onClick={() => removeFromPokedex(pokemon)} className='BtnExcluir'>Excluir</button>
        )}
      </div>
 */
}
