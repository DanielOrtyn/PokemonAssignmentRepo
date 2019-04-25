export const PokemonTypes = {
    POKEMON_UPDATE: 'POKEMON_UPDATE',
    PROCESSING_NEW_POKEMON: 'PROCESSING_NEW_POKEMON'
}

export const getPokemon = (pokemonId: number) => async (dispatch) => {
    dispatch({
        type: PokemonTypes.PROCESSING_NEW_POKEMON
    })
    const resp = await fetch('https://pokeapi.co/api/v2/pokemon/' + pokemonId);
    const body = await resp.json();
    dispatch({
        payload: {
            name: body.name,
            id: body.id,
            imageUrl: body.sprites['front_default']
        },
        type: PokemonTypes.POKEMON_UPDATE
    })
}
