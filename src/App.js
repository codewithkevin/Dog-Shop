import React from 'react';

import GoalList from './components/GoalList'
import './App.css'

const App = () => {
  return (
    <div>
      <div className="header-section">
       <h1>Hello World</h1>
      </div>
      <GoalList />
    </div>
  );
};

export default App;
