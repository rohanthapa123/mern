import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './pages/home/home.page';

import "bootstrap/dist/css/bootstrap.min.css"
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HomePage name="Rohan Thapa" address="Kathmandu"/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
