import React, { useContext, useEffect, useState } from "react";
import {
  PokedexDetailHeader,
  PokedexDetailCard,
  DetailContainer,
} from "./pokedexDetailPageStyle";
import Header from "../../Components/Header/Header";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { goToPokedex } from "../../Routs/coordinator";
import PokedexPage from "../PokedexPage/PokedexPage";
import GlobalState from "../../context/GlobalState";


const PokedexDetailPage = () => {
  const navigate = useNavigate();

  
  //const [pokedexDetail, setPokedexDetail] = useState({})

  const { pokedexDetail, setPokedexDetail } = useContext(GlobalState);
  console.log('ESTÁ AQUI', pokedexDetail);
  
  const [addPokemon, setAddPokemon] = useState([]);
  const [isAdded, setIsAdded] = useState(false);

  const { name } = useParams();

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((resp) => {
        setPokedexDetail(resp.data);
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);

  const changeButton = () => {
    setAddPokemon(pokedexDetail);
    setIsAdded(!isAdded);
    if (isAdded) {
      const listaPokemon = JSON.stringify(addPokemon);
      localStorage.setItem("lista", listaPokemon);
    } else {
      localStorage.removeItem("lista");
    }
    return <PokedexPage isAdded={isAdded}/>
  };

  const buttonText = !isAdded ? "Remover da Pokedex" : "Adicionar na Pokedex";

  return (
    <DetailContainer>
      <Header/>

      <PokedexDetailHeader>
        <div>
          <section className="header">
            <button onClick={() => goToPokedex(navigate)}>Voltar</button>
            <h1>{name}</h1>
            <button
              onClick={() => {
                changeButton();
              }}
            >
              {buttonText}
            </button>
          </section>
        </div>
      </PokedexDetailHeader>
      <PokedexDetailCard>
        <div className="imagem">
          <section>
            <img
              src={pokedexDetail.sprites?.front_default}
              alt="imagem do pokemon"
              className="imagem1"
            />

            <img
              src={pokedexDetail.sprites?.back_default}
              alt="imagem do pokemon"
              className="imagem2"
            />
          </section>
        </div>
        <div className="stats">
          <section>
            <h3>Stats</h3>
            <p>HP: {pokedexDetail.stats?.[0].base_stat}</p>
            <p>attack: {pokedexDetail.stats?.[1].base_stat}</p>
            <p>defense: {pokedexDetail.stats?.[2].base_stat}</p>
            <p>special-attack: {pokedexDetail.stats?.[3].base_stat}</p>
            <p>speed: {pokedexDetail.stats?.[5].base_stat}</p>
          </section>
        </div>
        <div className="typeMoves">
          <section className="type">
            <h3>Type</h3>
            <p>{pokedexDetail.types?.[0].type.name}</p>
            <p>{pokedexDetail.types?.[1].type.name}</p>
          </section>
          <section className="moves">
            <h3>Moves</h3>
            <p>{pokedexDetail.moves?.[0].move.name}</p>
            <p>{pokedexDetail.moves?.[1].move.name}</p>
            <p>{pokedexDetail.moves?.[2].move.name}</p>
          </section>
        </div>
      </PokedexDetailCard>
    </DetailContainer>
  );
};

export default PokedexDetailPage;
