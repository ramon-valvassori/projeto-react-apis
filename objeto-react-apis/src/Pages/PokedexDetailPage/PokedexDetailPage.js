import React from "react"
import { PokedexDetailHeader, PokedexDetailCard} from "./pokedexDetailPageStyle"
import { goToPokedex } from "../../Routs/coordinator"
import Header from "../../Components/Header/Header"
import { useNavigate } from "react-router-dom"


const PokedexDetailPage = () => {

const navigate = useNavigate()

    return(<>
        
        <PokedexDetailHeader>
        <div>    
        <section  className="header">
        <Header/>
        <button onClick={()=>goToPokedex(navigate)}>Voltar</button>
        <h1>NOME DO POKEMON</h1>
        <button>Adicionar/Remover da pokedex</button>
        </section>
        </div>
        </PokedexDetailHeader>
        <PokedexDetailCard>
        <div className="imagem">       
        <section>
            <p className="imagem1">Imagem frontal</p>
            <p className="imagem2">Imagem de costas</p>
        </section>
        </div> 
        <div className="stats"> 
        <section>
            <h3>Stats</h3>
            <p>HP:</p>
            <p>attack:</p>
            <p>defense:</p>
            <p>special-attack:</p>
            <p>speed:</p>
        </section>
        </div> 
        <div className="typeMoves"> 
        <section className="type">
            <p>type 1</p>
            <p>type 2</p>
        </section>
        <section className="moves">
            <h3>Moves</h3>
            <p>Move name 1</p>
            <p>Move name 2</p>
            <p>Move name 3</p>
        </section>
        </div> 
        </PokedexDetailCard>

        </>

    )
}

export default PokedexDetailPage