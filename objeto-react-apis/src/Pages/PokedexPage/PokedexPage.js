import React from "react"
import { PokedexContainer } from "./pokedexPageStyle"
import { goToPokedexDetail, goToPokemon } from "../../Routs/coordinator"
import Header from "../../Components/Header/Header"
import { useNavigate } from "react-router-dom"

const PokedexPage = () => {
    
    const navigate = useNavigate()

    
    
    return(<>
        
        
        <PokedexContainer>
        <header>
        <Header/>
        <button onClick={()=>goToPokemon(navigate)}>Voltar para a lista de pokemons</button>
        <h1>POKEDEX</h1>
    </header>
    
    <section>
    <div>
        <h2>Poke Card</h2>
        <button>Adcionar</button>
        <button onClick={()=>goToPokedexDetail(navigate)}>Ver detal.</button>
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
    </PokedexContainer>
    </>
    )
}

export default PokedexPage