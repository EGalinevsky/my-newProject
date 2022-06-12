import React, { ReactNode } from 'react'
import { useAuthContext } from '../../../../helpers/contexts/AuthContext'
import s from '../../styles/section.module.scss'
import { ReactComponent as Location } from '../../../../assets/Location.svg'
import { ReactComponent as Facabook } from '../../../../assets/facebook.svg'
import { ReactComponent as Instagram } from '../../../../assets/instagram.svg'
import { ReactComponent as Twitter } from '../../../../assets/twitter.svg'
import { ReactComponent as More } from '../../../../assets/more.svg'
import SocialMedia from './SocialMedia'

const Discription = () => {
  const { currentUser } = useAuthContext()
  const userName = currentUser?.displayName
  const name = userName && `${userName?.slice(0, 1).toUpperCase()}.${userName?.slice(1, 2).toUpperCase()}.`
  const socialAccount = [
    {
      name: 'Facabook',
      Icon: Facabook,
      path: '/'
    }, {
      name: 'Instagram',
      Icon: Instagram,
      path: '/'
    }, {
      name: 'Twitter',
      Icon: Twitter,
      path: '/'
    },
  ]
  const address = 'Novogrudok, Belarus'
  return (
    <section className={s.wrapperDiscription}>
      <div className={s.wrapperAvatar}>
        <div className={s.avatar}>
          {name || 'Your Photo'}
        </div>
      </div>
      <div className={s.profileInner}>
        <div className={s.discriptionInner}>
          <h2 className={s.profileTitle}>
            {currentUser?.displayName || 'inter you Name'}
          </h2>
          <p className={s.profileText}>Lorem ipsum, Lorem ipsum, dolor sit amet Lorem ipsum, dolor sit ametdolor sit amet consectetur adipisicing elit. Debitis quos dicta corrupti.</p>
          <div className={s.ProfileSocial}>
            <Location />
            {address}
            {socialAccount.map(i =>
              <SocialMedia
                key={i.name}
                name={i.name}
                Icon={i.Icon}
                path={i.path}
              />
            )}
          </div>
        </div>
        <div className={s.moreIcon}>
          <More />
        </div>
      </div>

    </section>
  )
}

export default Discription