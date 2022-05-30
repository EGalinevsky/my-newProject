import React, { useEffect, useState } from 'react';
import './App.css';


import {
  BrowserRouter as Router,
} from "react-router-dom";
import Routers from './components/Routers';
import { getAuth, OAuthCredential, onAuthStateChanged } from 'firebase/auth';
import { useAppDispatch } from './hooks/redux-hooks';
import { setUser } from './store/slices/userSlice';
import { Loader } from './components/Loader';

function App() {
  const [loading, setLoading] = useState<boolean>(false)
  const auth = getAuth();
  const dispatch = useAppDispatch()
  const getUser = async () => {
    onAuthStateChanged(auth, (data) => {
      dispatch(setUser({
        email: data?.email,
        id: data?.uid,
        token: (data as unknown as OAuthCredential | null)?.accessToken,
      }))
      setLoading(false)
    })
  }
  useEffect(() => {
    setLoading(true)
    getUser()
  }, [])
  return (
    <div className="App">
      {loading ? <Loader /> : (
        <Router>
          <Routers />
        </Router>
      )}

    </div>
  );
}

export default App;
