import {values} from 'lodash';

export const selectAllPokemon = (state) =>{
  return Object.values(state.entities.pokemon);
};
