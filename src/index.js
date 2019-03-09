import React from 'react';

import { 
  render 
} from 'react-dom';

import {
  Provider 
} from 'react-redux';

import store from './store/indes'

import './index.css';
import Home from './pages/containers/home';
import * as serviceWorker from './serviceWorker';

const rootContainer = document.getElementById('root')

render(
  <Provider store={store}>
    <Home />
  </Provider>,
  rootContainer
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();