import { combineReducers } from "redux";
import { clickerReducer } from "./clicker.reducer";
import { chuckNorrisReducer } from "./chuck-norris.reducer";
import { pokemonReducer } from "./pokemon.reducer";

export interface IClickerState {
    clicks: number
}

export interface IChuckNorrisState {
    joke: string,
    proccessingNewJoke: boolean
}

export interface IPokemonState {
    name: string,
    id: number,
    imageUrl: '',
    proccessingNewPokemon
}

export interface IState {
    clicker: IClickerState,
    chuckNorris: IChuckNorrisState,
    pokemon: IPokemonState
}

export const state = combineReducers<IState>({
    clicker: clickerReducer,
    chuckNorris: chuckNorrisReducer,
    pokemon: pokemonReducer
})