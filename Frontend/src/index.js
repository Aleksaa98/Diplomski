import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import './i18n';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {store, persistor} from './app/Redux/store'
import {PersistGate} from 'redux-persist/integration/react'

ReactDOM.render(
  <BrowserRouter basename="/demo/corona-react-free/template/demo_1/preview">
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>
, document.getElementById('root'));

serviceWorker.unregister();