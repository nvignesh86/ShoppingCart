import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import './index.css';
//import App from './App';
import Layout from './Layout';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import ReduxStore from './Redux/ConfigureStore';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ReduxStore}>
    <Router>
      <Layout />
    </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
