import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import {Input} from "../common/formsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import { connect } from 'react-redux';
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";
import s from '../common/formsControls/FormsControls.module.css'


type formDataType = {
    email: string
    password: string
    rememberMe:boolean
}
type LoginType = {
    isAuth: boolean
    login: (email: string, password: string, rememberMe: boolean) => void
}

const LoginForm:React.FC<InjectedFormProps<formDataType>> = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field type="text"
                           placeholder={"email"}
                           component={Input}
                           name={"email"}
                           validate={[required]}
                    />
                </div>
                <div>
                    <Field type={"password"}
                           placeholder={"password"}
                           component={Input}
                           name={"password"}
                           validate={[required]}
                    />
                </div>
                <div>
                    <Field type={"checkbox"}
                           component={Input}
                           name={"rememberMe"}
                    />
                    remember me
                </div>
                {
                    props.error && <div className={s.formSummaryErr}>
                        {props.error}
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

const Login = (props:LoginType) => {
    const onSubmit = (formData:formDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if(props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};
const mapStateToProps = (state:AppStateType) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps,{login})(Login);