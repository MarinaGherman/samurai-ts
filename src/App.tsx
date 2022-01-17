import React, {Component, ReactNode} from 'react';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import s from './App.module.scss'
import UsersContainer from './components/users/UsersContainer';
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {getAuthUserData} from "./redux/auth-reducer";
import {initializeApp} from "./redux/app-reducer";
import Loader from "./components/common/Loader";
import {compose} from "redux";
import {AppStateType} from "./redux/redux-store";




class App extends Component{

    componentDidMount() {
        //@ts-ignore
        this.props.initializeApp();
    }
    render() {
        // // @ts-ignore
        // if(!this.props.initialized) {
        //     return <Loader/>
        // }
        return (
            <BrowserRouter>
                <div className={s.appWrapper}>
                    <HeaderContainer/>
                    <Navbar />
                    <div className={s.appWrapperContent}>
                        {/*@ts-ignore*/}
                        <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                        {/*@ts-ignore*/}
                        <Route path="/profile/:userId?" render={() => <ProfileContainer/>} />
                        {/*@ts-ignore*/}
                        <Route path="/users" render={() => <UsersContainer/>} />
                        {/*@ts-ignore*/}
                        <Route path="/login" render={() => <Login/>} />
                    </div>
                </div>
            </BrowserRouter>
        );
    }

}
const mapStateToProps = (state:AppStateType) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    state.app.initialized
}

export default compose<React.ComponentType>( connect(mapStateToProps,{
    initializeApp
})) (App);