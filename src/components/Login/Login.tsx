import React from 'react';
import { InjectedFormProps, reduxForm} from 'redux-form'
import {Check, createField, Input} from "../common/formsControls/FormsControls";
import {required} from "../../utils/validators/validators";

import {loginTC} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import s from '../common/formsControls/FormsControls.module.css'
import {useDispatch, useSelector} from "react-redux";


type formDataType = {
    email: string
    password: string
    rememberMe:boolean
}


const LoginForm:React.FC<InjectedFormProps<formDataType>> = ({handleSubmit,error}) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {createField("E-mail",Input,'email',[required])}
                {createField("password",Input,'password',[required], {type: "password"})}
                {createField("rememberMe",Check,'rememberMe',[], {type: "checkbox"})}
                <div>
                    remember me
                </div>
                {
                    error && <div className={s.formSummaryErr}>
                        {error}
                    </div>
                }
                <button>Login</button>
            </form>
        </div>
    );
};

//HOC

let LoginReduxForm = reduxForm<formDataType>({
    form: 'login'
})(LoginForm)

const Login = () => {
    const dispatch = useDispatch()

    //@ts-ignore
    const isAuth = useSelector(state => state.auth.isAuth)


    const onSubmit = (formData:formDataType) => {
        dispatch(loginTC(formData.email, formData.password, formData.rememberMe))
    }
    if(isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};
export default Login;