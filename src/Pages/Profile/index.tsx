import React from 'react'
import Content from './components/Content/Index'
import Discription from './components/Discription'
import Hat from './components/Hat'
import s from './styles/profile.module.scss'

const Profile = () => {
  return (
    <div className={s.profile}>
      <Hat />
      <Discription />
      <Content />
    </div>
  )
}

export default Profile