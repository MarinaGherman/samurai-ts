import React, {Component} from 'react';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route} from 'react-router-dom';
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
import s from './App.module.scss'
// import UsersContainer from './components/users/UsersContainer';
// import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import {compose} from "redux";
import {AppStateType} from "./redux/redux-store";
import Loader from "./components/common/Loader";

//create lazy bundle for fast rendering of App
const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"))
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"))
const UsersContainer = React.lazy(() => import('./components/users/UsersContainer'))

class App extends Component{

    componentDidMount() {
        //@ts-ignore
        this.props.initializeApp();
    }
    render() {
        return (
            <BrowserRouter>
                <div className={s.appWrapper}>
                    <HeaderContainer/>
                    <Navbar />
                    <div className={s.appWrapperContent}>
                        {/*@ts-ignore*/}
                        <Route path='/dialogs' render={() => {
                            return <React.Suspense fallback ={<Loader/>}>
                                <DialogsContainer/>
                            </React.Suspense>

                        }}/>
                        {/*@ts-ignore*/}
                        <Route path="/profile/:userId?" render={() => {
                            return <React.Suspense fallback ={<Loader/>}>
                                <ProfileContainer/>
                            </React.Suspense>
                        }} />
                        {/*@ts-ignore*/}
                        <Route path="/users" render={() =>{
                            return <React.Suspense fallback ={<Loader/>}>
                            <UsersContainer/>
                            </React.Suspense>
                        }} />
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