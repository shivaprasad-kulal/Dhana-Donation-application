import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import View from './components/View';


import Test from './components/Test';
import Search from './components/Search';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
    <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path="login" element={<Login />} />
      <Route path="Home" element={<Home/>} />
      <Route path="View" element={<View/>}/>
      <Route path="Test" element={<Test/>} />
      <Route path="Search" element={<Search/>}/>
      </Routes>
      </BrowserRouter>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
