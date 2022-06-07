import { getAuth, OAuthCredential, updateProfile } from 'firebase/auth';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import SingUpForm from '../../../components/Form/SingUp'

// import { setUser } from '../../../store/slices/userSlice'

// import { getAuth, createUserWithEmailAndPassword, OAuthCredential, updateProfile } from "firebase/auth";
// import { useNavigate } from 'react-router-dom';
// import { useAppDispatch } from '../../../hooks/redux-hooks';

import { useAuthContext } from '../../../contexts/AuthContext';
import { useAppDispatch } from '../../../hooks/redux-hooks';
import { setUser } from '../../../store/slices/userSlice';
const SingUp = () => {
  // const dispatch = useAppDispatch()
  const [loading, setLoading] = useState<boolean>(false)
  const { singUp, currentUser } = useAuthContext()
  const dispatch = useAppDispatch();
  const auth = getAuth();

  const navigate = useNavigate()
  const [login, setLogin] = useState<string>('')
  console.log(login)
  // const handleRegistration = async (email: string, password: string) => {
  //   const auth = getAuth();
  //   setLoading(true)
  //   try {
  //     const response = await createUserWithEmailAndPassword(auth, email, password)
  //     dispatch(setUser({
  //       email: response.user.email,
  //       id: response.user.uid,
  //       token: (response.user as unknown as OAuthCredential).accessToken,
  //       // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //       displayName: updateProfile((auth as any).currentUser, { displayName: login })
  //     }))

  //     localStorage.setItem('uid', JSON.stringify(response.user.uid))
  //     navigate('/')
  //   } catch (error) {
  //     console.log(error)
  //   } finally {
  //     setLoading(false)
  //     navigate('/')
  //   }

  // }
  const handleRegistration = async (email: string, password: string) => {
    try {
      const response = await singUp(email, password)
      // console.log(response)
      // console.log((auth as any).currentUser)
      // console.log((auth as any).currentUser)
      // console.log(response.user.uid)
      dispatch(setUser({
        email: response.user.email,
        id: response.user.uid,
        token: (response.user as unknown as OAuthCredential).accessToken,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        displayName: login
      }))
      await updateProfile(response.user, { displayName: login })
      localStorage.setItem('uid', JSON.stringify(response.user.uid))
      return response
    } catch (error) {
      console.log(error)
    } finally {
      navigate('/')
    }
    setLoading(false)
  }
  return (
    <>
      <SingUpForm
        setLogin={setLogin}
        login={login as string}
        handleRegistration={handleRegistration} />
    </>
  )
}

export default SingUp