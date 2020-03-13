import React from 'react';

// Stylesheets
import "./vendor/bootstrap/css/bootstrap.min.css";
import './css/agency.css';

// Components
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Connect from './components/Connect';

function App() {
  return (
    <>
    <div id="page-top">
      <Navbar />
      <Header />
      <Skills />
      <Portfolio />
      <About /> 
      <Connect />
      </div>
    </>
  );
}

export default App;
