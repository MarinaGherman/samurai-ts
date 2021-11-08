import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.scss';



const Navbar = ( ) => {
    return <nav className={s.nav}>
        <div className={`${s.item} ${s.active}`}>
            <NavLink to="/profile" >Profile</NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <NavLink to="/dialogs">Messages</NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <NavLink to="/users">Users</NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <a>News</a>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <a>Music</a>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <a>Settings</a>
        </div>
    </nav>
}

export default Navbar;