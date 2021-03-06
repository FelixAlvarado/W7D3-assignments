export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
export const RECEIVE_POKEMON = 'RECEIVE_POKEMON';
import * as APIUtil from '../util/api_util';

export const receiveAllPokemon = (pokemon) => {
  return {
      type: RECEIVE_ALL_POKEMON,
      pokemon
  };
};

export const receivePokemon = (payload) => {
  return {
      type: RECEIVE_POKEMON,
      payload
  };
};

export const requestAllPokemon = () => (dispatch) => (
  APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
);

export const requestSinglePokemon = (id) => (dispatch) => (
  APIUtil.fetchPokemon(id)
    .then(payload => dispatch(receivePokemon(payload)))
);
