import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Index } from '@ts/index';
import { store } from './ts/store';

ReactDOM.render(
  <Provider store={store}>
    <Index />
  </Provider>,
  document.getElementById('root')
);
