import React from 'react';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import s from './App.module.scss'
import UsersContainer from './components/users/UsersContainer';
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";


const App = () => {

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

export default App;