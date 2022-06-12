import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import s from './form.module.scss'
import Back from './../../../assets/BackIcon.svg'

import СloseEye from './../../../assets/СloseEye.svg'
import OpenEye from './../../../assets/OpenEye.svg'

interface IloginForm {
    handleLogin: (email: string, password: string) => void
}

const LoginForm: React.FC<IloginForm> = ({ handleLogin }) => {
    const [show, setShow] = useState<boolean>(false)
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    return (
        <div className={s.wrapper_form}>
            <div className={s.form_header}>
                <Link to='/'>
                    <img className={s.search__img} src={Back} alt="Back" title='Back to home' />
                </Link>
                <h2 className={s.form_title}>
                    Sing in to World
                </h2>
            </div>
            <div className={s.auth_form_body}>
                <div>
                    <label className={s.login_title} htmlFor="login_field">Username or email address</label>
                    <input
                        className={`${s.login_input} ${s.login_block}`}
                        type="text"
                        name="login"
                        id="login_field"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className={s.auth_item}>
                    <div className={s.auth_password}>
                        <label className={s.login_title} htmlFor="password_field">Password</label>
                        <a className={s.label_link} href="/">Forgot password?</a>
                    </div>
                    <div className={s.password_input}>
                        <input
                            className={`${s.login_input} ${s.login_block}`}
                            type={show ? 'text' : 'password'}
                            name="login"
                            id="password_field"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                        <img
                            onClick={() => setShow(prev => !prev)} className={s.showPasswordImg}
                            src={show ? СloseEye : OpenEye}
                            alt="Back"
                            title='Back to home' />
                    </div>
                </div>

                <input value='Sing in' type="submit" className={s.btn_sent} onClick={() => handleLogin(email, password)} />
            </div>
            <div className={s.auth_form_footer}>
                <p>
                    New User?
                </p>
                <Link to='/singup'>
                    Create an account.
                </Link>
            </div>
        </div>
    )
}

export default LoginForm