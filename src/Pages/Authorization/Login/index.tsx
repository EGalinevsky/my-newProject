import React, { useState } from 'react'
import LoginForm from '../../../components/Form/SingIn'
import {
  OAuthCredential
} from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { setUser } from '../../../store/slices/userSlice'
import { useAppDispatch } from '../../../helpers/hooks/redux-hooks';
import { Loader } from '../../../components/Loader';
import { useAuthContext } from '../../../helpers/contexts/AuthContext';

const Login = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const dispatch = useAppDispatch()
  console.log(loading)
  const { singIn } = useAuthContext()

  const navigate = useNavigate()

  const handleLogin = async (email: string, password: string) => {
    setLoading(true)
    try {
      const response = await singIn(email, password)
      dispatch(setUser({
        email: response.user.email,
        id: response.user.uid,
        token: (response.user as unknown as OAuthCredential).accessToken,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      }))
      localStorage.setItem('uid', JSON.stringify(response.user.uid))
      navigate('/')
      return response
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  return (
    <>{loading ? <Loader /> :
      <LoginForm handleLogin={handleLogin} />}
    </>
  )
}

export default Login