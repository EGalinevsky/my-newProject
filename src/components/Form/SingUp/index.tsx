import React, { useState } from 'react'
import s from './form.module.scss'
import { Link } from 'react-router-dom'
import Back from './../../../assets/BackIcon.svg'
import СloseEye from './../../../assets/СloseEye.svg'
import OpenEye from './../../../assets/OpenEye.svg'

const SingUpForm = () => {
    const [show, setShow] = useState<boolean>(false)
    console.log(show)
    return (
        <div className={s.wrapper_form}>
            <div className={s.form_header}>
                <Link to='/'>
                    <img className={s.search__img} src={Back} alt="Back" title='Back to home' />
                </Link>
                <h4 className={s.form_title}>
                    Welcome to our world
                </h4>
            </div>
            <p className={s.wrapper_form_text}>
                Let’s begin the adventure...
            </p>
            <div className={s.auth_form_body}>
                <form>
                    <div>
                        <label className={s.login_title} htmlFor="login_field">Enter your email</label>
                        <input
                            className={`${s.login_input} ${s.login_block}`}
                            type="text"
                            name="email"
                            id="login_field"
                            required
                        />
                    </div>
                    <div className={s.auth_item}>
                        <label className={s.login_title} htmlFor="login_field">Create a password</label>
                        <div className={s.auth_password}>
                            <input
                                className={`${s.login_input} ${s.login_block}`}
                                type={show ? 'text' : 'password'}
                                name="login"
                                required
                                id="login_field" />
                            <img onClick={() => setShow(prev => !prev)} className={s.showPasswordImg} src={show ? СloseEye : OpenEye} alt="Back" title='Back to home' />
                        </div>
                    </div>
                    <div className={s.auth_item}>
                        <label className={s.login_title} htmlFor="login_field">Enter a username</label>
                        <input className={`${s.login_input} ${s.login_block}`} type="text" name="login" id="login_field" />
                    </div>
                    <input value='Create account' type="submit" className={s.btn_sent} />
                </form>
            </div>
        </div>
    )
}

export default SingUpForm