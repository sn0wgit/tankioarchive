import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Intro from './Intro';
import Header from './Header';
//import '@material/web/button/filled-button.js';
//import '@material/web/button/outlined-button.js';
//import '@material/web/checkbox/checkbox.js';
import reportWebVitals from './reportWebVitals';

import './i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Intro />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();