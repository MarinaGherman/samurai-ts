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
                  <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                  <Route path="/profile/:userId?" render={() => <ProfileContainer/>} />
                  <Route path="/users" render={() => <UsersContainer/>} />
                  <Route path="/login" render={() => <Login/>} />
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;