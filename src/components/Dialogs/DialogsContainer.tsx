import React from 'react';
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogsReducer";
import StoreContext from '../../StoreContext';
import Dialogs from './Dialogs';



const DialogsContainer = () => {

    // @ts-ignore
    return <StoreContext.Consumer>
        {
        (store) => {
            // @ts-ignore
            let state = store.getState().dialogsReducer;


            let onSendMessageClick = () => {
                // @ts-ignore
                store.dispatch(sendMessageActionCreator())
            }
            let onNewMessageChange = (body:any) => {
                // @ts-ignore
                store.dispatch(updateNewMessageBodyActionCreator(body))
            }
            return (
                <Dialogs updateNewMessageBody={onNewMessageChange}
                         sendMessage={onSendMessageClick}
                         messagePage={state}/>

            )
        }
    }

    </StoreContext.Consumer>


};

export default DialogsContainer;