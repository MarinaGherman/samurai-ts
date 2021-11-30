import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

type MapStatePropsType = {
    isAuth:boolean
}

const mapStateToProps = (state:any):MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function withAuthRedirect<T>(Component:any) {
    const RedirectComponent =(props:any) => {
        let {isAuth,...restProps} = props
        if(!isAuth) return <Redirect to={'/login'}/>

        return <Component {...restProps as T} />
    }
    return connect(mapStateToProps)(RedirectComponent)
}