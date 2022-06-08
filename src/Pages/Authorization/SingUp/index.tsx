import { getAuth, OAuthCredential, updateProfile } from 'firebase/auth';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import SingUpForm from '../../../components/Form/SingUp'
import { Loader } from '../../../components/Loader';

import { useAuthContext } from '../../../helpers/contexts/AuthContext';
import { useAppDispatch } from '../../../helpers/hooks/redux-hooks';
import { setUser } from '../../../store/slices/userSlice';

const SingUp = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const { singUp, currentUser } = useAuthContext()
  const dispatch = useAppDispatch();
  const auth = getAuth();

  const navigate = useNavigate()
  const [login, setLogin] = useState<string>('')
  const handleRegistration = async (email: string, password: string) => {
    setLoading(true)
    try {
      const response = await singUp(email, password)
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
      {loading ? <Loader /> :
        <SingUpForm
          setLogin={setLogin}
          login={login as string}
          handleRegistration={handleRegistration} />}
    </>
  )
}

export default SingUp