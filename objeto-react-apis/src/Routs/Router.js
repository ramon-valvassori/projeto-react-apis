import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom'
import PokedexPage from "../Pages/PokedexPage/PokedexPage"

import PokedexDetailPage from "../Pages/PokedexDetailPage/PokedexDetailPage"
import ErrorPage from "../Pages/ErrorPage/ErroPage"
import { PokemonCard } from "../Components/PokemonCard/PokemonCard"
import PokemonListPage from '../Pages/PokemonListPage/PokemonListPage'


const Router = () => {
    return(
        <HashRouter>
            <Routes>
                <Route path="/" element={<PokemonListPage PokemonCard={PokemonCard}/>}/>
                <Route path="/pokedex/" element={<PokedexPage/>}/>
                <Route path="/pokedexdetail/:name" element={<PokedexDetailPage/>}/> 
                <Route path="*"  element={<ErrorPage/>}/>

            </Routes>
        </HashRouter>
    )
}

export default Router