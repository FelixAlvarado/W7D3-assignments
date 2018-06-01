import {connect} from 'react-redux';
import {selectAllPokemon} from '../../reducers/selectors';
import PokemonDetail from './pokemon_detail';
import { requestSinglePokemon } from '../../actions/pokemon_actions';

const mapStateToProps  = (state , ownProps) => {

  return {pokemon: state.entities.pokemon[ownProps.match.params.pokemonId]};
};

const mapDispatchToProps = dispatch => ({
  requestSinglePokemon:  (id) => dispatch(requestSinglePokemon(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);
