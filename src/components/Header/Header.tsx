import React from 'react'
import { Link } from 'react-router-dom'
import s from './header.module.scss'

const Header = () => {
    return (
        <header className={s.header}>
            <p className={s.logo}>
                <Link to="/" className={s.logoLink}>logo</Link>
            </p>
            <h1 className={s.title}>
                Welcome to My Home
            </h1>
            <nav className={s.navigation}>
                <Link to='/login' className={s.navigation_linkin}>Sing in</Link>
                <Link to='/singup' className={s.navigation_linkup}>Sing up</Link>
            </nav>
        </header>
    )
}

export default Header