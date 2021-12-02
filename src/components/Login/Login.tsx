import React from 'react';
import { Field, reduxForm } from 'redux-form'

export type LoginPropsTypes = {
    onSubmit: React.FormEventHandler<HTMLFormElement> | undefined
    handleSubmit: React.FormEventHandler<HTMLFormElement> | undefined
}

let LoginForm = (props:LoginPropsTypes) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field type="text"
                              placeholder={"login"}
                              component={"input"}
                              name={"login"}
                    />
                </div>
                <div>
                    <Field type={"password"}
                              placeholder={"password"}
                              component={"input"}
                              name={"password"}
                    />
                </div>
                <div>
                    <Field type={"checkbox"}
                              component={"input"}
                              name={"rememberMe"}
                    />
                    remember me
                </div>
                <button>Login</button>
            </form>
        </div>
    );
};

//HOC

let LoginReduxForm:any = reduxForm({
    form: 'login'
    // @ts-ignore
})(LoginForm)


const Login = () => {
    const onSubmit = (formData:any) => {
        console.log(formData)
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

export default Login;