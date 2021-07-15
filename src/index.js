import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter  
    >
      {/* 
      : BrowserRouter needs to Render here as the Higher Order Component of App.js using useLocation() Hook
        P
        : TypeError: Cannot read property 'location' of undefined
        : https://www.evernote.com/shard/s350/nl/180370944/9658377a-0a95-e8f1-b807-b045eb919126?title=(Shogo)%20%E4%B8%AD%E7%B4%9AEx/%22Issue%22%20=%20TypeError:%20Cannot%20read%20property%20'location'%20of%20undefined        
       */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
