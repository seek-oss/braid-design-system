import 'focus-visible';
import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App/App';

hydrate(
  <BrowserRouter basename={process.env.ROUTER_BASENAME}>
    <App />
  </BrowserRouter>,
  document.getElementById('app')
);
