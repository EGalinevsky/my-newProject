import React, {
  useContext,
  useEffect,
  useState
} from 'react'
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  OAuthCredential
} from "firebase/auth";
import { useAppDispatch } from '../hooks/redux-hooks';
import { setUser } from '../store/slices/userSlice';

const AuthContext = React.createContext({} as any)

export function useAuthContext() {
  return useContext(AuthContext)
}

interface IAuthProvider {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any
}

function AuthProvider({ children }: IAuthProvider) {
  const [currentUser, setCurrentUser] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);
  const dispatch = useAppDispatch()
  const auth = getAuth();

  function singUp(email: string, password: string) {
    return createUserWithEmailAndPassword(auth, email, password)
  }
  function singIn(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password)
  }

  function logOut() {
    return signOut(auth);
  }

  useEffect(() => {
    const unSubsctiver = onAuthStateChanged(auth, (user: any) => {
      dispatch(setUser({
        email: user?.email,
        id: user?.uid,
        token: (user as unknown as OAuthCredential | null)?.accessToken,
      }))
      console.log(user);
      setCurrentUser(user);
      setLoading(false);
    })
    return unSubsctiver
  }, []);

  const isUserAuth = currentUser?.uid === (localStorage.getItem('uid') as string).replace(/"/g, '');

  const value = {
    currentUser,
    singUp,
    singIn,
    logOut,
    isUserAuth,
  }

  return (
    <AuthContext.Provider value={value as any}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

export default AuthProvider