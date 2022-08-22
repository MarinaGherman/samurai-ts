import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.scss';
import {Box} from "@mui/material";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import GroupIcon from '@mui/icons-material/Group';
import EmailIcon from '@mui/icons-material/Email';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import SettingsIcon from '@mui/icons-material/Settings';

const Navbar = ( ) => {
    return <nav className={s.nav}>
        <Box className={`${s.item} ${s.active}`}>
            <NavLink to="/profile" >
                <div className={s.navBlock}>
                    <span className={s.icon}><AccountBoxIcon/></span>
                    <span className={s.iconText}>Profile</span>
                </div>
            </NavLink>
        </Box>
        <div className={`${s.item} ${s.active}`}>
            <NavLink to="/dialogs">
                <div className={s.navBlock}>
                    <span className={s.icon}><GroupIcon/></span>
                    <span className={s.iconText}>Messages</span>
                </div>
            </NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <NavLink to="/users">
                <div className={s.navBlock}>
                    <span className={s.icon}><EmailIcon/></span>
                    <span className={s.iconText}>Users</span>
                </div>
            </NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <div className={s.navBlock}>
                <span className={s.icon}><NewspaperIcon/></span>
                <span className={s.iconText}>News</span>
            </div>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <div className={s.navBlock}>
                <span className={s.icon}><SlowMotionVideoIcon/></span>
                <span className={s.iconText}>Music</span>
            </div>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <NavLink to="/settings">
                <div className={s.navBlock}>
                    <span className={s.icon}><SettingsIcon/></span>
                    <span className={s.iconText}>Settings</span>
                </div>
            </NavLink>
        </div>
    </nav>
}

export default Navbar;