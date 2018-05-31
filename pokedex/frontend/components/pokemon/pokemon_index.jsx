import React from 'react';
import { requestAllPokemon } from '../../actions/pokemon_actions';
import PokemonIndexItem from './pokemon_index_item'
class PokemonIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon()
  }

  render(){


    const listItem = this.props.pokemon.map((item) => (
      <PokemonIndexItem key={item.id} pokemon={item}/>
    ));
  return (
    <div>
    <h1> Pokedex</h1>
    <ul>
      {listItem}
    </ul>
    </div>
  );
}
}

export default PokemonIndex;
