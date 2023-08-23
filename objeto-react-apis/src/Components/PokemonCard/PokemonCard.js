import React, { useContext, useEffect, useState } from "react";
import {
  PokemonCardContainerStyled,
  RecipeCardStyled,
} from "./pokemonCardStyle";
import axios from "axios";
import { goToPokedex, goToPokedexDetail } from "../../Routs/coordinator";
import { useNavigate } from "react-router-dom";
import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Text, Divider, ButtonGroup, Button } from "@chakra-ui/react";

export const PokemonCard = ({ pokemon }) => {
  const [newPokemon, setNewPokemon] = useState();

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
  };

  return (
    <PokemonCardContainerStyled>
      {newPokemon && (
        <Card styled="width: 440px;
        height: 210px;
        flex-shrink: 0;"
        maxW="sm">
          <CardBody>
            <img
              src={newPokemon.sprites.other.home.front_default}
              alt="imagem do pokemon"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">{newPokemon.name}</Heading>
              <Text>1</Text>
              <Text color="blue.600" fontSize="2xl">
                $450
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button
                onClick={() => goToPokedexDetail(navigate, newPokemon.name)}
                variant="solid"
                colorScheme="blue"
              >
                Detalhes
              </Button>
              <Button
                onClick={addPokemonHome}
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
