
export const goToPokemon = (navigate) => {
    navigate('/')
}

export const goToPokedex = (navigate) => {
    navigate('/pokedex/')
}

export const goToPokedexDetail = (navigate, name) => {
    navigate(`/pokedexdetail/${name}`)
}