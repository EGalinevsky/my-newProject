import React from 'react'
import { Link } from 'react-router-dom'
import s from './form.module.scss'
import Back from './../../assets/BackIcon.svg'

const Form = () => {
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
                <form>
                    <div>
                        <label className={s.login_title} htmlFor="login_field">Username or email address</label>
                        <input className={`${s.login_input} ${s.login_block}`} type="text" name="login" id="login_field" />
                    </div>
                    <div className={s.auth_item}>
                        <div className={s.auth_password}>
                            <label className={s.login_title} htmlFor="login_field">Password</label>
                            <a className={s.label_link} href="">Forgot password?</a>
                        </div>
                        <input className={`${s.login_input} ${s.login_block}`} type="password" name="login" id="login_field" />
                    </div>
                    <input value='Sing in' type="submit" className={s.btn_sent} />
                </form>
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

export default Form