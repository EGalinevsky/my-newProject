import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Routers from './components/Routers';
import AuthProvider from './helpers/contexts/AuthContext';

console.log();
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routers />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
