import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import axios from 'axios';
// import { store } from './redux/store';
axios.defaults.baseURL = 'http://localhost:3001'

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);
