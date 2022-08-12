import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../redux/auth-reducer";



const Header = () => {
    const dispatch = useDispatch()
    const isAuth = useSelector(state => {
        // @ts-ignore
        return state.auth.isAuth;
    })
    const login = useSelector(state => {
        // @ts-ignore
        return state.auth.login;
    })

    return <header className={s.header}>
        <img src='https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png'  alt="img"/>
        <div className={s.loginBlock}>
            {isAuth
                ?  <div>{login} -
                        <button onClick={() => dispatch(logout())}>LogOut</button>
                    </div>
                : <NavLink to={'./login'}>Login</NavLink>}
        </div>
    </header>
}

export default Header;