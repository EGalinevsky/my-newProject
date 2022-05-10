import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { Loader } from './components/Loader';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='section-body'>
        <Loader />
      </div>
    </div>
  );
}

export default App;
