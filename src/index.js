import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Auth0Provider
    domain="demo-app-stage.eu.auth0.com"
    clientId="05UHdhZN45yheyzjmh3GyuNeVCwySWJ2"
    redirectUri={"https://dev-heroku-app-varsha.herokuapp.com"}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
