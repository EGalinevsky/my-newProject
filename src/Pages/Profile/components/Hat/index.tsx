import React from 'react'
import wallpaper from '../../../../assets/img/wallpaper.jpg'
import s from '../../styles/hat.module.scss'
import { ReactComponent as BackIcon } from '../../../../assets/BackIcon.svg'
import { Link } from 'react-router-dom'

const Hat = () => {
    return (
        <div className={s.wrapperWallpaper}>
            <Link className={s.icon} to={'/'}>
                <BackIcon />
            </Link>
            <img className={s.wallpaper} src={wallpaper} alt={'wallpaper'} />
        </div>
    )
}

export default Hat