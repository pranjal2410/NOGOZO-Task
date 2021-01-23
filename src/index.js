import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import CredentialContextProvider from "./context/CredentialContext";
import {SnackbarProvider} from "notistack";
import CartContextProvider from "./context/CartContext";
import CategoryContextProvider from "./context/CategoryContext";

ReactDOM.render(
  <SnackbarProvider maxSnack={1}>
      <CartContextProvider>
        <CredentialContextProvider>
              <CategoryContextProvider>
                  <BrowserRouter>
                      <App />
                  </BrowserRouter>
              </CategoryContextProvider>
        </CredentialContextProvider>
      </CartContextProvider>
  </SnackbarProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
