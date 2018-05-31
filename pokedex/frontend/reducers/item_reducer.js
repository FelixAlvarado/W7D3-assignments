import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON } from '../actions/pokemon_actions';
import {merge} from 'lodash';

const itemsReducer = (state = {},action) =>{
  // console.log(action);
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
     return action.pokemon.items;
    case RECEIVE_POKEMON:
     return action.pokemon.items;
     default:
     return state;
  }

};

export default itemsReducer;
