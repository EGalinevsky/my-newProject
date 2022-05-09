import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> 
        <div className='loader'>
            <div className='ball'></div>
            <div className='ball'></div>
            <div className='ball'></div>
            <p>loading...</p>
        </div>
      </header>
    </div>
  );
}

export default App;
