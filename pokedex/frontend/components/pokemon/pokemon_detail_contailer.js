import {connect} from 'react-redux';
import {selectAllPokemon} from '../..reducers/selectors';
import PokemonDetail from './pokemon_detail';
import { requestSinglePokemon } from '../../actions/pokemon_actions';

const mapeStateToProps  = (state) => ({
  pokemon: selectAllPokemon(state)
});

const mapDispatchToProps = dispatch => ({
  requestSinglePokemon:  () => dispatch(requestSinglePokemon())
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);
