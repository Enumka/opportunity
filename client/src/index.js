import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import axios from 'axios';
import { store } from './redux/store';
import { CssBaseline } from '@mui/material';
axios.defaults.baseURL = 'http://localhost:3001'
axios.defaults.withCredentials = true
ReactDOM.render(
  <React.StrictMode>
    <CssBaseline>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </CssBaseline>
  </React.StrictMode>,
  document.getElementById('root')
);
