import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from "axios";
import Navbar from './Components/Navbar';
import Footer from "./Components/Footer";
import ProductList from './Components/ProductList';
import CartList from './Components/CartList';
import SignupLogin from './Components/SignupLogin';
import {Routes,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<ProductList/>}/>
        <Route path="/cart" element={<CartList/>} />
        <Route path="/signup&login" element={<SignupLogin/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
