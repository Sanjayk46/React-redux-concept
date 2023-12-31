import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import AuthenticationContextProvider from './Context/userContext'
 //import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/Store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
  // <Router>
  //   {/* <Provider store={store}>
  //     <App />
  //   </Provider> */}
  //     <AuthenticationContextProvider>
  //     <App />
  //   </AuthenticationContextProvider>
  // </Router>
);