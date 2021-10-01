import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.scss';
import {DialogType, MessageType, MessagesPageType} from "../../redux/state";

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

const Dialogs = ({state: {dialogs, messages}}:Props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {
                    dialogs.map(dialog=> <DialogItem name={dialog.name} id={dialog.id}/>)
                }
            </div>
            <div className={s.messages}>
                {
                    messages.map(dialog=> <Message message={dialog.message}/>)
                }
            </div>
        </div>
    );
};

export default Dialogs;