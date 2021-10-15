import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";

import {BrowserRouter, Route} from 'react-router-dom';
import s from './App.module.scss'
import { StateType} from "./redux/store";


export type Props = {
    state: StateType
}

const App = ({state}:Props) => {
    console.log(state)
  return (
      <BrowserRouter>
          <div className={s.appWrapper}>
              <Header />
              <Navbar />
              <div className={s.appWrapperContent}>
                  <Route path='/dialogs' render={() => <Dialogs state={state.messagesPage}/>}/>
                  <Route path="/profile" render={() => <Profile state={state.profilePage}/>} />
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;