import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store, {StateType} from "./redux/store";

 let callSubscriber=(state:StateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={store.getState()}
                 // addPost={store.addPost}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
callSubscriber(store.getState());

store.subscribe(() => {
    let state = store.getState()
    callSubscriber(state)
});


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
