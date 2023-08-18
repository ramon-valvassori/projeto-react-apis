import { useNavigate } from "react-router-dom"
import { goToPokedexDetail, goToPokedex, goToPokemon } from "../../Routs/coordinator"


const Header = () => {
    const navigate = useNavigate()

    return(
        <div>
            <section onClick={()=>goToPokemon(navigate)}>
            <h1>1</h1>
            </section>
            <section onClick={()=>goToPokedex(navigate)}>
                
            </section>
            <section onClick={()=>goToPokedexDetail(navigate)}>
                
            </section>
        </div>
    )
}

export default Header