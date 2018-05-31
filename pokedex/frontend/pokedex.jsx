import React from 'react';
import ReactDOM from 'react-dom';
import { fetchAllPokemon  } from './util/api_util';
import { receiveAllPokemon , requestAllPokemon } from './actions/pokemon_actions';
import configureStore from './store/store.js';
import { selectAllPokemon }  from './reducers/selectors';
import Root from './components/root';
import {HashRouter, Route} from 'react-router-dom';

document.addEventListener("DOMContentLoaded",()=>{
  const store = configureStore();
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  // window.fetchAllPokemon = fetchAllPokemon;
  // window.receiveAllPokemon = receiveAllPokemon;
  // window.selectAllPokemon = selectAllPokemon;
  // window.requestAllPokemon = requestAllPokemon;
  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, rootEl);
});
