import React from 'react';
import { requestSinglePokemon } from '../../actions/pokemon_actions';

class PokemonDetail extends React.Component {
  constructor(props){
    super(props);

  }

  componentDidMount() {
    this.props.requestSinglePokemon(this.props.match.params.pokemonId)

  }

  render(){
    const pokemon = this.props.pokemon;
    console.log(this.props);
    if (!pokemon) {
      return (
        <div> Loading ..</div>
      )
    }
  return (
    <div>
    <h1> hello </h1>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.image_url}/>
      <li>{pokemon.attack}</li>
      <li>{pokemon.defense}</li>
      <li>{pokemon.poke_type}</li>
      <li>{pokemon.moves}</li>
    </div>
  );
}
}

export default PokemonDetail;
