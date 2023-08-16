import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PokedexPage from "../Pages/PokedexPage/PokedexPage"
import PokemonListPage from "../Pages/PokemonsListPage/PokemonsListPage"
import PokedexDetailPage from "../Pages/PokedexDetailPage/PokedexDetailPage"
import ErrorPage from "../Pages/ErrorPage/ErroPage"
import { PokemonCard } from '../Components/PokemonCard/PokemonCard'

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PokemonListPage PokemonCard={PokemonCard}/>}/>
                <Route path="/pokedex/" element={<PokedexPage/>}/>
                <Route path="/pokedexdetail/" element={<PokedexDetailPage/>}/> 
                <Route path="*"  element={<ErrorPage/>}/>

            </Routes>
        </BrowserRouter>
    )
}

export default Router