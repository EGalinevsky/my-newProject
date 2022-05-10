import React from 'react'
import s from './loader.module.scss'

export const Loader = () => {
    return (
        <div className={s.loader}>
            <div className={s.ball}></div>
            <div className={s.ball}></div>
            <div className={s.ball}></div>
            <p>loading...</p>
        </div>
    )
}
