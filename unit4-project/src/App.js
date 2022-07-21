import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from "axios";
import Navbar from './Components/Navbar';
import Footer from "./Components/Footer";
import ProductList from './Components/ProductList';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ProductList/>
      <Footer/>
    </div>
  );
}

export default App;
