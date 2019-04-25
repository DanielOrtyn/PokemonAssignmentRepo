import React from 'react';
import { IState, IPokemonState } from '../../reducers';
import { connect } from 'react-redux';
import { getPokemon } from '../../actions/pokemon.actions';

interface IPokemonProps {
    pokemon: IPokemonState,
    getPokemon: (pokemonId: number) => void
    updatePokemonInputId: (idNumber: number) => void
}

interface IPokemonInputState {
    inputId: number;
}

export class PokemonComponent extends React.Component<IPokemonProps, IPokemonInputState> {
    constructor(props) {
        super(props);
        this.state = {
            inputId: 1
        };
    }


    updateId = (event) => {
        this.setState({
            inputId: event.target.value
        });
    }

    render() {
        const { pokemon } = this.props;
        return (
            <div>
                <h1> {pokemon.name} </h1>
                <img src={pokemon.imageUrl} />
                <input type="number" id="inputUsername" name="pokemon-id"
                    className="form-control" placeholder="Pokemon-Id"
                    required value={this.state.inputId} onChange={this.updateId} />
                <button onClick={() => this.props.getPokemon(this.state.inputId)}
                    className="btn btn-success" >Get Pokemon</button>
            </div >
        );
    }
}

const mapStateToProps = (state: IState) => {
    return {
        pokemon: state.pokemon
    }
}

const mapDispatchToProps = {
    getPokemon: getPokemon
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonComponent);