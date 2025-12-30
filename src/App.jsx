import { useState } from 'react'
import './App.css'
import Header from "./components/Header";
import Homesection from './components/section/Homesection';
import Productsection from './components/section/Productsection';
import Aboutsection from './components/section/Aboutsection';
import Contact from './components/section/Contact';

function App() {

  return (
    <>
      <div>
        <Header/>
        <div>
          <Homesection/>
        </div>
        <Productsection/>
        <Aboutsection/>
        <Contact/>
      </div>
 
    </>
  )
}

export default App
