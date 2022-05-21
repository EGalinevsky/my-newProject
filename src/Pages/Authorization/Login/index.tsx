import React from 'react'
import LoginForm from '../../../components/Form/SingIn'
import { getAuth, signInWithEmailAndPassword, OAuthCredential } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { setUser } from '../../../store/slices/userSlice'
import { useAppDispatch } from '../../../hooks/redux-hooks';

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    console.log(auth);
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user );
        console.log(sessionStorage.getItem('Auth Token'));
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          token: (user as unknown as OAuthCredential).accessToken,
        }))
        navigate('/')
      }
      )
      .catch(console.error
      //   (error) => {
      //   const errorCode = error.code;
      //   const errorMessage = error.message;
      // }
      );
  }
  return (
    <>
      <LoginForm handleLogin={handleLogin} />
    </>
  )
}

export default Login