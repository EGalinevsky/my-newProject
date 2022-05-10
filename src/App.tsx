import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { Loader } from './components/Loader';
import {
  BrowserRouter as Router,

} from "react-router-dom";
import Routers from './components/Routers';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className='section-body'>
          <Routers />
          <Loader />
        </div>
      </Router>
      test...
    </div>
  );
}

export default App;
