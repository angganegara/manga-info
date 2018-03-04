import React from "react";
import { render } from "react-dom";
import { Provider } from 'react-redux';
import store from './store';
import { HashRouter } from 'react-router-dom';

import App from './containers/App';

render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);