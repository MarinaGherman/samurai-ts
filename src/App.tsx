import React from 'react';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route} from 'react-router-dom';
import s from './App.module.scss'
import Login from "./components/Login/Login";
import {initializeApp} from "./redux/app-reducer";
import Loader from "./components/common/Loader";
import Header from "./components/Header/Header";
import {useDispatch} from "react-redux";
import {Grid} from "@mui/material";

//create lazy bundle for fast rendering of App
const Dialogs = React.lazy(() => import("./components/Dialogs/Dialogs"))
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"))
const UsersContainer = React.lazy(() => import('./components/users/UsersContainer'))

const App = () => {
    const dispatch = useDispatch()
    dispatch(initializeApp)
        return (
            <BrowserRouter>

                <div className={s.appWrapper}>
                    <Header/>
                    <Grid container>
                        <Grid item xs={2}>
                            <Navbar />
                        </Grid>
                        <Grid item xs={10}>
                            <div className={s.appWrapperContent}>
                                {/*@ts-ignore*/}
                                <Route path='/dialogs' render={() => {
                                    return <React.Suspense fallback ={<Loader/>}>
                                        <Dialogs/>
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
                        </Grid>

                    </Grid>


                </div>
            </BrowserRouter>
        );
}
export default App;