import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Collection from './components/Collections';
import Service from './components/Services';
import About from './components/About';
import Hero from './components/Hero';
import Menu from './components/Menu';
import './App.css'

const App = () => {
  return (
    <div className="main-class">
      <nav className="navbar container">
        <a href="https://github.com/codewithkevin" className="logo" title="logo">DOG GUARDS</a>

        <input type="checkbox" id="toggler"></input>
        <label for="toggler"><i class="ri-menu-line"></i></label>

        <div className="menu">
          <Menu />
        </div>

      </nav>
      
      <div className="hero">
        <Hero />
      </div>
      
      <div className="about">
        <About />
      </div>

      <div className="services">
        <Service />
      </div>   

      <div className="Collection">
        <Collection />
      </div>

      
    </div>  
  );
};

export default App;
