import React from 'react';



import Menu from './components/Menu';
import './App.css'

const App = () => {
  return (
    <div className="Container">
      <nav className="navbar container">
        <a href="https://github.com/codewithkevin" class="logo" title="logo">BEAT THE BUZZER</a>

        <input type="checkbox" id="toggler"></input>
        <label for="toggler"><i class="ri-menu-line"></i></label>

        <div className="menu">
          <Menu />
        </div>

      </nav>





    </div>  
  );
};

export default App;
