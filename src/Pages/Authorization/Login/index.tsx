import React, { useState } from 'react'
import LoginForm from '../../../components/Form/SingIn'
import {
  getAuth
} from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { setUser } from '../../../store/slices/userSlice'
import { useAppDispatch } from '../../../hooks/redux-hooks';
import { Loader } from '../../../components/Loader';
import { useAuthContext } from '../../../contexts/AuthContext';

const Login = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const dispatch = useAppDispatch()

  const { singIn } = useAuthContext()

  const navigate = useNavigate()
  const auth = getAuth();
  console.log(auth)
  // const handleLogin = async (email: string, password: string) => {
  //   setLoading(true)
  //   try {
  //     const response = await signInWithEmailAndPassword(auth, email, password)
  //     dispatch(setUser({
  //       email: response.user.email,
  //       id: response.user.uid,
  //       token: (response.user as unknown as OAuthCredential).accessToken,
  //     }))
  //     localStorage.setItem('uid', JSON.stringify(response.user.uid))
    
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setLoading(false)
  //     navigate('/')
  //   }
  //   console.log(auth);
  // }

  const handleLogin = async (email: string, password: string) => {
    try {
      const response = await singIn(email, password)
      localStorage.setItem('uid', JSON.stringify(response.user.uid))
      navigate('/')
      return response
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  return (
    <>
      <LoginForm handleLogin={handleLogin} />
    </>
  )
}

export default Login