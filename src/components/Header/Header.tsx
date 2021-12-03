import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.scss';

export type HeaderPropsType ={
    isAuth: boolean
    login:string
}

const Header = (props:HeaderPropsType) => {
    return <header className={s.header}>
        <img src='https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png'  alt="img"/>
        <div className={s.loginBlock}>
            {props.isAuth ? props.login : <NavLink to={'./login'}>Login</NavLink>}
        </div>
    </header>
}

export default Header;