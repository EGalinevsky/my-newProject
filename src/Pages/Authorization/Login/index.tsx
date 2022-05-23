import React, { useState } from 'react'
import LoginForm from '../../../components/Form/SingIn'
import { getAuth, signInWithEmailAndPassword, OAuthCredential, setPersistence, browserSessionPersistence } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { setUser } from '../../../store/slices/userSlice'
import { useAppDispatch } from '../../../hooks/redux-hooks';
import { Loader } from '../../../components/Loader';

const Login = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const auth = getAuth();
  console.log(loading)
  const handleLogin = async (email: string, password: string) => {
    setLoading(true)
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password)
      dispatch(setUser({
        email: user.email,
        id: user.uid,
        token: (user as unknown as OAuthCredential).accessToken,
      }))
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
      navigate('/')
    }
    console.log(auth);

    // .then(({ user }) => {
    //   console.log(user);
    //   console.log(sessionStorage.getItem('Auth Token'));

    // }
    // )
    // .catch(console.error
    //   //   (error) => {
    //   //   const errorCode = error.code;
    //   //   const errorMessage = error.message;
    //   // }
    // );
  }
  return (
    <>
      {loading ? <Loader/> : <LoginForm handleLogin={handleLogin} /> }
      
    </>
  )
}

export default Login