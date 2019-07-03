import React from 'react';

// Stylesheets
import "./vendor/bootstrap/css/bootstrap.min.css";
import './css/agency.css';

// Components
import Header from "./components/Header";
import Skills from "./components/Skills";
import Portfolio from './components/Portfolio';



function App() {
  return (
    <>
      <Header />
      <Skills />
      <Portfolio />
    </>
  );
}

export default App;
