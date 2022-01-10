import React, {ReactNode} from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.scss';

export type HeaderPropsType ={
    isAuth: boolean
    login:any
    logout:any
    getAuthUserData:() => void;
    children?: ReactNode;
}

const Header = (props:HeaderPropsType) => {
    return <header className={s.header}>
        <img src='https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png'  alt="img"/>
        <div className={s.loginBlock}>
            {props.isAuth
                ?  <div>{props.login} -
                        <button onClick={props.logout}>LogOut</button>
                    </div>
                : <NavLink to={'./login'}>Login</NavLink>}
        </div>
    </header>
}

export default Header;