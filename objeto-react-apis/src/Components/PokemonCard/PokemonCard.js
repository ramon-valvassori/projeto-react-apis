import React, { useContext, useEffect, useState } from "react";
import {
  PokemonCardContainerStyled,
  RecipeCardStyled,
} from "./pokemonCardStyle";
import axios from "axios";
import { goToPokedex, goToPokedexDetail } from "../../Routs/coordinator";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Card, CardHeader, CardBody, CardFooter, Stack, Heading, Text, Divider, ButtonGroup, Button } from "@chakra-ui/react";



import GlobalContext from "../../context/GlobalContext";

export const PokemonCard = ({ pokemon }) => {

  const {newPokemon, setNewPokemon} = useContext(GlobalContext)

  const { setGetPokemon , addPokemonHome} = useContext(GlobalContext)

  const [pokeDate, setPokeDate] = useState({})

  

  const navigate = useNavigate();

   const getPokemons = () => {
  axios
      .get(pokemon.url)
      .then((resp) => {
        console.log(resp.data);
        
        setPokeDate(resp.data);
      })
      .catch((erro) => {});
    }
  useEffect(() => {
    getPokemons()
  }, []);
 
    /* const listaPokemon = JSON.stringify(newPokemon);
    localStorage.setItem("lista", listaPokemon); */
  
  return (
    <PokemonCardContainerStyled >
       {pokeDate.name && (
        <Card> 
        <Box  />
          <CardBody >
            <img
              src={pokeDate.sprites?.other["official-artwork"].front_default}
              alt="imagem do pokemon"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">{pokeDate.name}</Heading>
              <Text></Text>
              <Text color="blue.600" fontSize="2xl">
                $450
              </Text> 
            </Stack> 
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button
                onClick={() => goToPokedexDetail(navigate, pokeDate.name)}
                variant="solid"
                colorScheme="blue"
              >
                Detalhes
              </Button>
              <Button
                onClick={()=>addPokemonHome(pokeDate.id)}
                variant="ghost"
                colorScheme="blue"
              >
                Capturar
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      )} 
    </PokemonCardContainerStyled>
  );
};

{/* <div className='LeftCard'>
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
 */}