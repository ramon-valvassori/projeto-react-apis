import React from "react"
import {Container, Container2} from "./pokemonListPageStyle"
import { goToPokedex } from "../../Routs/coordinator"
import Header from "../../Components/Header/Header"
import { useNavigate } from "react-router-dom"
import { usePokemonList } from "../../hooks/useRequestPokemon"
import PokemonCard from "../../Components/PokemonCard/PokemonCard"
import { useState } from "react"


const PokemonListPage = () => {
    //const { pokemonList, isError, isLoading } = usePokemonList()
    
    const pokemonList = usePokemonList()
    console.log(pokemonList);
    const navigate = useNavigate()

    const renderList = pokemonList.map(pok => {

    
        return (
          <PokemonCard 
          name={pok.name}
          url={pok.url}
          />     
           )
          })
    
    return(
        <>
      
    <Container>
    
    <Header/>
    
        <button onClick={()=>goToPokedex(navigate)}>"Ver minha POKEDEX"</button>
        {renderList}
        {/*<h1>Lista de Pokemons</h1>
        {pokemonList.map((pokemon)=>{
            return(
                <PokemonCard
                key={pokemonList.id}
                pokemon={pokemon}
                />
            )
        })}*/}
    
    
    
    {/*<section>
    <div>
        <h2>Poke Card</h2>
        <button>Adcionar</button>
        <button>Ver detal.</button>
    </div>
    <div>
        <h2>Poke Card</h2>
        <button>Adcionar</button>
        <button>Ver detal.</button>
    </div><div>
        <h2>Poke Card</h2>
        <button>Adcionar</button>
        <button>Ver detal.</button>
    </div><div>
        <h2>Poke Card</h2>
        <button>Adcionar</button>
        <button>Ver detal.</button>
    </div><div>
        <h2>Poke Card</h2>
        <button>Adcionar</button>
        <button>Ver detal.</button>
    </div><div>
        <h2>Poke Card</h2>
        <button>Adcionar</button>
        <button>Ver detal.</button>
    </div><div>
        <h2>Poke Card</h2>
        <button>Adcionar</button>
        <button>Ver detal.</button>
    </div><div>
        <h2>Poke Card</h2>
        <button>Adcionar</button>
        <button>Ver detal.</button>
    </div>
    </section>*/}
    </Container>
    {/*<PokemonCard/>*/}
    </>
    
    )
}

export default PokemonListPage