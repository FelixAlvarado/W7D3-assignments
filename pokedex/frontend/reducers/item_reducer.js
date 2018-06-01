import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON } from '../actions/pokemon_actions';
import {merge} from 'lodash';

const itemsReducer = (state = {},action) =>{
  // console.log(action);
  switch (action.type) {
    case RECEIVE_POKEMON:
     return action.payload.items;
     default:
     return state;
  }

};

export default itemsReducer;
