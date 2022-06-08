import { getAuth, signOut } from 'firebase/auth';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../helpers/contexts/AuthContext';
import { useAppDispatch } from '../../helpers/hooks/redux-hooks';
import { useAuth } from '../../helpers/hooks/use-auth';
import { removeUser } from '../../store/slices/userSlice';
import s from './header.module.scss'

const Header = () => {
    const dispatch = useAppDispatch();
    const [error, setError] = useState("")
    const navigate = useNavigate()
    const auth = getAuth();
    const { logOut, currentUser } = useAuthContext()
    const { isAuth, email } = useAuth();
    const handleLogout = async () => {
        setError("")
        try {
            await logOut(auth)
            navigate('/')
        } catch {
            setError("Failed to log out")
        }
    }
    return (
        <header className={s.header}>
            <p className={s.logo}>
                <Link to="/" className={s.logoLink}>logo</Link>
            </p>
            {error}
            <h1 className={s.title}>
                Welcome to My Home
            </h1>
            {isAuth ?
                <div className={s.wrapper_navbar}>
                    <p>
                        {currentUser.displayName}
                    </p>
                    <div className={s.navigation}>
                        <Link to='/profile' className={s.navigation_linkin}>Profile</Link>
                        <button
                            className={s.navigation_linkup}
                            onClick={() => {
                                dispatch(removeUser());
                                localStorage.removeItem('uid');
                                handleLogout()
                            }}
                        >
                            Logout
                        </button>
                    </div>
                </div> : (
                    <nav className={s.navigation}>
                        <Link to='/login' className={s.navigation_linkin}>Sing in</Link>
                        <Link to='/singup' className={s.navigation_linkup}>Sing up</Link>
                    </nav>
                )}
        </header>
    )
}

export default Header