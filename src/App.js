import React from 'react';


import Menu from './components/Menu';
import './App.css'

const App = () => {
  return (
    <nav className="navbar container">
      <a href="https://github.com/codewithkevin" class="logo">BEAT THE BUZZER</a>

      <input type="checkbox" className="toggler"></input>
      <label for="toggler">MENU</label>

      <div className="menu">
        <Menu />
      </div>

    </nav>
  );
};

export default App;
