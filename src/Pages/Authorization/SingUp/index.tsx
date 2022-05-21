import React from 'react'
import SingUpForm from '../../../components/Form/SingUp'
import { setUser } from '../../../store/slices/userSlice'
import { getAuth, createUserWithEmailAndPassword, OAuthCredential } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/redux-hooks';

const SingUp = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const handleRegistration = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user );
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          token: (user as unknown as OAuthCredential).accessToken,
        }))
        navigate('/')
      }
      )
      .catch(
        console.error
        //     (error) => {
        //     const errorCode = error.code;
        //     const errorMessage = error.message;
        // }
      );
  }
  return (
    <>
      <SingUpForm handleRegistration={handleRegistration} />
    </>
  )
}

export default SingUp