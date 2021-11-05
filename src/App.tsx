import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import s from './App.module.scss'
import UsersContainer from './components/users/UsersContainer';


const App = () => {

  return (
      <BrowserRouter>
          <div className={s.appWrapper}>
              <Header />
              <Navbar />
              <div className={s.appWrapperContent}>
                  <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                  <Route path="/profile" render={() => <Profile/>} />
                  <Route path="/users" render={() => <UsersContainer/>} />

              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;