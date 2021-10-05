import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.scss';
import store, {
    DialogType,
    MessageType,
    MessagesPageType
} from "../../redux/state";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogsReducer";

const DialogItem = ({name, id}: DialogType) => {
    return(
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={"/dialogs/" + id} >{name}</NavLink>
        </div>
    )
}

const Message = ({message}: MessageType) => {
    return (
        <div className={s.message}>
            {message}
        </div>
    )
}

export type Props = {
    state: MessagesPageType
}

const Dialogs = ({state: {dialogs, messages,newMessageBody }}:Props) => {
    let dialogsElements =  dialogs.map(dialog=> <DialogItem name={dialog.name} id={dialog.id}/>)
    let messagesElements = messages.map(dialog=> <Message id={dialog.id} message={dialog.message}/>)
    let MessageBody = newMessageBody


    let onSendMessageClick = () => {
        store.dispatch(sendMessageActionCreator())
    }
    let onNewMessageChange = (e: any) => {
        let body = e.target.value
        store.dispatch(updateNewMessageBodyActionCreator(body))

    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <div>
                        <textarea value={MessageBody}
                                  onChange={onNewMessageChange}
                                  placeholder="enter your mess"
                        />
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>A  dd Message</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;