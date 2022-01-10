import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import {Input} from "../common/formsControls/FormsControls";
import {required} from "../../utils/validators/validators";


type formDataType = {
    login: string
    password: string
    rememberMe:boolean
}

const LoginForm:React.FC<InjectedFormProps<formDataType>> = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field type="text"
                           placeholder={"login"}
                           component={Input}
                           name={"login"}
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
    const onSubmit = (formData:formDataType) => {
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