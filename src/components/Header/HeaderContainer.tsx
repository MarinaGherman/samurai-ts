import React from 'react';
import Header from "./Header";
import {connect, useSelector} from "react-redux";
import {logout} from "../../redux/auth-reducer";




const HeaderContainer = (props:any) => {
    const isAuth = useSelector(state => {
        // @ts-ignore
        return state.auth.isAuth;
    })
    const login = useSelector(state => {
        // @ts-ignore
        return state.auth.login;
    })

    return <Header isAuth={isAuth} login={login} {...props}/>
};


export default connect(null,{
    logout
})(HeaderContainer);