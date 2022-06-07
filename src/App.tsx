import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Routers from './components/Routers';
import AuthProvider from './contexts/AuthContext';

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
