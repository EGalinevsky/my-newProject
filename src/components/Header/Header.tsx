import React from 'react'
import s from './header.module.scss'

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.logo}>
                <a href="#" className={s.logoLink}>logo</a>
            </div>
            <div className={s.title}>
                Title
            </div>
            <nav className={s.navigation}>
                Navigation
            </nav>
        </header>
    )
}

export default Header