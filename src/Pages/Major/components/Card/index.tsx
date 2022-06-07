import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import s from '../../styles/card.module.scss'
import { ReactComponent as LikeEmpty } from '../../../../assets/LikeEmpty.svg'
import { ReactComponent as Like } from '../../../../assets/LIke.svg'
import { useAuthContext } from '../../../../contexts/AuthContext';

interface ICard {
    id: string;
    name: string;
    text: string
}
const Card: React.FC<ICard> = ({ name, text, id }) => {
    const [count, setCount] = useState<number>(0);
    const { isUserAuth } = useAuthContext()
    const [isClick, setIsClick] = useState<boolean>(false);
    const dateToday = new Date();
    const [fakeMonth, day, year] = [dateToday.getMonth() + 1 + '', dateToday.getDate(), dateToday.getFullYear()];
    const month = fakeMonth.length >= 2 ? fakeMonth : `0${fakeMonth}`

    console.log(isUserAuth)
    return (
        <div className={s.wrapperCard}>
            <div className={s.headerCard}>
                <div className={s.headerCardLike}>
                    {
                        isClick ? <Like onClick={() => setCount(prev => prev + 1)} /> : <LikeEmpty onClick={() => {
                            setCount(prev => prev + 1)
                            setIsClick(true)
                        }} />
                    }
                    <span>{count === 0 ? null : count}</span>
                </div>
                <p>{day}.{month}.{year}</p>
            </div>
            <Link to={`/${name.toLocaleLowerCase().replace(/ /g, '')}`} className={s.descriptionCard}>

                <p className={s.textCard}>{text}</p>
                <h2 className={s.titleCard}>{name}</h2>
            </Link>
        </div>

    )
}

export default Card