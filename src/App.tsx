import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route} from 'react-router-dom';
import s from './App.module.scss'
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = () => {

  return (
      <BrowserRouter>
          <div className={s.appWrapper}>
              <Header />
              <Navbar />
              <div className={s.appWrapperContent}>
                  <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                  <Route path="/profile" render={() => <Profile/>} />
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;