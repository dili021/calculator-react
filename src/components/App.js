import React from 'react';
import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate'; //eslint-disable-line

function App() {
  return (
    <div className="app">
      <Display />
      <ButtonPanel />
    </div>
  );
}

export default App;
