import React from 'react';
import ReactDOM from 'react-dom';
import * AS APIUtil from './util/api_util';
import * AS Actions from './actions/pokemon_actions';

document.addEventListener("DOMContentLoaded",()=>{
  window.fetchAllPokemon = APIUtil.fetchAllPokemon;
  window.receiveAllPokemon = Actions.receiveAllPokemon;
  const rootEl = document.getElementById('root');
  ReactDOM.render(<h1>Pokedex</h1>, rootEl);
});
