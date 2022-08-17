import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {logoutTC} from "../../redux/auth-reducer";
import logo from './../../assets/images/main-logo.svg'
import {Box, Grid} from '@mui/material';
import ButtonComponent from "../common/ButtonComponent";

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

    return <Box className={s.header}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <div className={s.logo}>
                        <img src={logo}  alt="img"/>
                        <span className={s.logoText}>
                            Social Network
                         </span>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div className={s.loginBlock}>
                        {isAuth
                            ?  <div>
                                <span className={s.loginText}> {login}</span>
                                <ButtonComponent
                                    title={'LogOut'}
                                    onClick={() => dispatch(logoutTC())}/>
                            </div>
                            : <NavLink to={'./login'}>
                                <div className={s.login}>
                                    Login
                                </div>
                            </NavLink>}
                    </div>
                </Grid>
            </Grid>
            </Box>
}

export default Header;