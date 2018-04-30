import jquery from 'jquery';
import React from 'react';
import ReactDOM  from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { AppContainer } from 'react-hot-loader';
import App from './App';

import './semantic/semantic.min.js';
import './semantic/components/modal.min.js';

import './semantic/semantic.min.css';
import './semantic/components/modal.min.css';
import './main.css';

const render = (Component) =>
  ReactDOM.render(
    <AppContainer>
      <Router>
        <Component />
      </Router>
    </AppContainer>,
    document.getElementById('app')
  );

render(App);
if (module.hot) {
  module.hot.accept('./App', () => {
    require('./App');
    render(App);
  });
}
