import React, { useId } from 'react'
import Header from '../../components/Header/Header'
import Card from './components/Card';
import s from './styles/index.module.scss'

interface IUser {
    id: string;
    name: string;
    title: string
}


export const Major = () => {
    const arrCards: IUser[] = [
        {
            id: useId(),
            name: 'Culture',
            title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure facilis, dolorem delectus, ratione velit unde ullam officia eligendi quibusdam aspernatur assumenda possimus dicta et praesentium maxime minus earum quisquam aliquam.'
        },
        {
            id: useId(),
            name: 'Sport',
            title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure facilis, dolorem delectus, ratione velit unde ullam officia eligendi quibusdam aspernatur assumenda possimus dicta et praesentium maxime minus earum quisquam aliquam.'
        },
        {
            id: useId(),
            name: 'Take Actions',
            title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure facilis, dolorem delectus, ratione velit unde ullam officia eligendi quibusdam aspernatur assumenda possimus dicta et praesentium maxime minus earum quisquam aliquam.'
        }
    ];
    return (
        <>
            <Header />
            <main>
                <section className={s.sectionBody}>
                    {arrCards.map(card => <Card
                        key={card.id}
                        id={card.id}
                        name={card.name}
                        text={card.title} />)}
                </section>
            </main>
            <footer>
                footer
            </footer>
        </>
    )
}
