import { IPokemonState } from ".";
import { PokemonTypes } from "../actions/pokemon.actions";


const initialState: IPokemonState = {
    name: `Bulbasaur`,
    id: 1,
    imageUrl: '',
    proccessingNewPokemon: false
}

export const pokemonReducer = (state = initialState, action) => {

    switch (action.type) {
        case PokemonTypes.POKEMON_UPDATE:
            return {
                ...state,
                name: action.payload.name,
                id: action.payload.id,
                imageUrl: action.payload.imageUrl,
                proccessingNewPokemon: false
            }
        case PokemonTypes.PROCESSING_NEW_POKEMON:
            return {
                ...state,
                proccessingNewPokemon: true
            }
        default:
            break;
    }

    return state;
}
