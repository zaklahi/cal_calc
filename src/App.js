import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import CalorieCalculator from './calorieCalc/calorieCalc';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <p>Edit <code>src/App.js</code> and save to reload.</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
      </header> */}
      <Router>
        <Routes>
          <Route exact path="/" element={<CalorieCalculator />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
