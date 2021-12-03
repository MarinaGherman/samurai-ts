import React, {Component} from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";

export type MyProps = {
    getAuthUserData: () => void
}

class HeaderContainer extends Component<MyProps> {

    componentDidMount() {
        this.props.getAuthUserData();
    }

    render() {

        // @ts-ignore
        return <Header{...this.props}/>
    }
}
const mapStateToProps =(state:AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
export default connect(mapStateToProps,{
    getAuthUserData
})(HeaderContainer);