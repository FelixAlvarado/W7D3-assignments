import React from 'react';
import { requestAllPokemon } from '../../actions/pokemon_actions';

class PokemonIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render(){
    const listItem = this.props.pokemon.map((item) => {
      return (
      <li key={item.id} >{item.name}
      <img src={item.image_url}/></li>
     );
    });
  return (
    <div>
    <h1> Hello </h1>
    <ul>
      {listItem}
    </ul>
    </div>
  );
}
}

export default PokemonIndex;
