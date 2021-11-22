import React, {Component} from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/auth-reducer";

class HeaderContainer extends Component {

    componentDidMount() {
        // @ts-ignore
        this.props.getAuthUserData();
    }

    render() {
        // @ts-ignore
        return <Header {...this.props}/>
    }
}
const mapStateToProps =(state:any) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
export default connect(mapStateToProps,{
    getAuthUserData
})(HeaderContainer);