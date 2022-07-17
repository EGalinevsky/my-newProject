import React, { useId, useState } from 'react'
import Header from '../../components/Header/Header'
import Card from './components/Card';
import s from './styles/index.module.scss'
import { ReactComponent as Map } from '../../assets/MapEarth.svg'
import { Link, useNavigate } from 'react-router-dom';
import SideBar from '../../components/SideBar';
import { getAuth } from 'firebase/auth';
import { useAppDispatch } from '../../helpers/hooks/redux-hooks';
import { useAuthContext } from '../../helpers/contexts/AuthContext';
import { removeUser } from '../../store/slices/userSlice';
import culture from '../../assets/img/culture.png'
import sport from '../../assets/img/sport.jpg'
import action from '../../assets/img/action.jpg'
import { Loader } from '../../components/Loader';

interface IUser {
    id: string;
    name: string;
    title: string;
    img?: any
}


export const Major = () => {
    const dispatch = useAppDispatch();
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>("")
    const navigate = useNavigate()
    const auth = getAuth();
    const { logOut, currentUser } = useAuthContext()
    const handleLogout = async () => {
        setError("")
        setLoading(true)
        try {
            await logOut(auth)
        } catch {
            setError("Failed to log out")
        } finally {
            navigate('/')
        }
        setLoading(false)

    }
    const arrCards: IUser[] = [
        {
            id: useId(),
            name: 'Culture',
            title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure facilis, dolorem delectus, ratione velit unde ullam officia eligendi quibusdam aspernatur assumenda possimus dicta et praesentium maxime minus earum quisquam aliquam.',
            img: culture,
        },
        {
            id: useId(),
            name: 'Sport',
            title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure facilis, dolorem delectus, ratione velit unde ullam officia eligendi quibusdam aspernatur assumenda possimus dicta et praesentium maxime minus earum quisquam aliquam.',
            img: sport,
        },
        {
            id: useId(),
            name: 'Take Actions',
            title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure facilis, dolorem delectus, ratione velit unde ullam officia eligendi quibusdam aspernatur assumenda possimus dicta et praesentium maxime minus earum quisquam aliquam.',
            img: action
        }
    ];
    return (
        <div className={s.wrapper}>

            {loading ? <Loader /> : (<>
                <SideBar
                    removeUser={removeUser}
                    dispatch={dispatch}
                    handleLogout={handleLogout}
                    displayName={currentUser?.displayName}
                /> <div>
                    <div className={s.wrapperHeader}>
                        <h1 className={s.title}>
                            Welcome to Adventure
                        </h1>
                        <Header />
                    </div>
                    <main>
                        <section className={s.sectionBody}>
                            {arrCards.map(card => <Card
                                key={card.id}
                                id={card.id}
                                name={card.name}
                                text={card.title}
                                img={card.img} />)}
                        </section>
                    </main>
                    <footer className={s.footer}>
                        <Link to={'/map'}>
                            <Map />
                        </Link>
                    </footer>
                </div>
            </>)}

        </div>
    )
}
