import React from "react"
import {Container, Container2} from "./pokemonListPageStyle"
import { goToPokedex } from "../../Routs/coordinator"
import Header from "../../Components/Header/Header"
import { useNavigate } from "react-router-dom"

const PokemonListPage = () => {
    
    const navigate = useNavigate()
    
    return(
        <>
      
    <Container>
    <header>
    <Header/>
        <button onClick={()=>goToPokedex(navigate)}>"Ver minha POKEDEX"</button>
        <h1>Lista de Pokemons</h1>
    </header>
    
    <section>
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
    </section>
    </Container>
    </>
    
    )
}

export default PokemonListPage