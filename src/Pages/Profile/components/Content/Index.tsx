import React from 'react'
import s from '../../styles/profile.module.scss'
import { ReactComponent as Phone } from '../../../../assets/phone.svg'

const Content = () => {
  return (
    <div className={s.wrapperContent}>
      <div className={s.contentSidebar}>
        Phone: +37564526683
        <div >
          <button className={s.contentBtn}>Message</button>
          <button className={s.contentBtn}>Follow</button>
        </div>
      </div>
      <div className={s.content}>
        Nothing found
      </div>
    </div>
  )
}

export default Content