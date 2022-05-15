import React from 'react'
import { Link } from 'react-router-dom';
import s from '../../styles/card.module.scss'

interface ICard {
    id: string;
    name: string;
    text: string
}
const Card: React.FC<ICard> = ({ name, text, id }) => {
    console.log(id)
    return (
        <Link to={`/${name.toLocaleLowerCase().replace(/ /g, '')}`} className={s.wrapperCard}>
            <h2>{name}</h2>
            <p>{text}</p>
        </Link>
    )
}

export default Card