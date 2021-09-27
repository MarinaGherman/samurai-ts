import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";

import {BrowserRouter, Route} from 'react-router-dom';

import s from './App.module.scss'

const App = () => {
  return (
      <BrowserRouter>
          <div className={s.appWrapper}>
              <Header />
              <Navbar />
              <div className={s.appWrapperContent}>
                  <Route path='/dialogs' component={Dialogs}/>
                  <Route path="/profile" component={Profile} />
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;