import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import s from './App.module.scss'
import UsersContainer from './components/users/UsersContainer';
import ProfileContainer from "./components/Profile/ProfileContainer";


const App = () => {

  return (
      <BrowserRouter>
          <div className={s.appWrapper}>
              <Header />
              <Navbar />
              <div className={s.appWrapperContent}>
                  <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                  <Route path="/profile" render={() => <ProfileContainer/>} />
                  <Route path="/users" render={() => <UsersContainer/>} />

              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;