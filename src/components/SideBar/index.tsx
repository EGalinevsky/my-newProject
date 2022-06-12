import React, { useState } from 'react'
import { ReactComponent as Logo } from '../../assets/Logo.svg'
import { ReactComponent as Exit } from '../../assets/Exit.svg'
import { ReactComponent as Friends } from '../../assets/Friends.svg'
import { ReactComponent as Message } from '../../assets/Message.svg'
import s from '../SideBar/SideBar.module.scss'
import { Link } from 'react-router-dom'

const SideBar = ({ removeUser, dispatch, handleLogout, displayName }: any) => {
  const [isClick, setIsClick] = useState<boolean>(true)
  const name = displayName && `${displayName?.slice(0, 1).toUpperCase()}.${displayName?.slice(1, 2).toUpperCase()}.`

  const menuItem = [
    {
      path: '/message',
      name: 'Message',
      icon: <Friends />
    },
    {
      path: '/friends',
      name: 'Friends',
      icon: <Message />
    },
  ]
  return (
    <div className={isClick ? s.wrapperSideBar : `${s.wrapperSideBar} ${s.active}`}>
      <div className={s.wrapperNavink}>
        <div className={s.sideBarLogo}>
          <Logo />
        </div>
        <div className={s.itemNavLink}>
          {menuItem.map((i) => (
            <Link className={s.innerNavLink} to={i.path} key={i.path}>
              {i.icon}
              {!isClick && i.name}
            </Link>
          ))}
        </div>
      </div>
      <div>
        <button onClick={() => setIsClick(!isClick)}
          className={s.btnShowSidebar}
        >
          <div className={isClick ? s.animation1 : `${s.animation1} ${s.active}`}>
            <div className={s.arrow}></div>
          </div>
        </button>
        {name && <Link
          to='/profile'
          className={s.wrapperProfile}>
          <div title={displayName} className={s.profile}>
            {name}
          </div>
        </Link>}
        <div>
          <button
            className={s.logOut}
            onClick={() => {
              dispatch(removeUser());
              localStorage.removeItem('uid');
              handleLogout()
            }}
          >
            <Exit />
          </button>
        </div>
      </div>
    </div>
  )
}

export default SideBar