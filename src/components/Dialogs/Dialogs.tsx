import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Dialogs.module.scss';

const DialogItem = ({name, id}: any) => {
    return(
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={"/dialogs/" + id} >{name}</NavLink>
        </div>
    )
}

export type MessageType = {
    id: number
    message:string
}
export type DialogsPropsType = {
    updateNewMessageBody?:any
    sendMessage?:any
    dialogsPage?:any
    isAuth: boolean
}

const Message = (props: MessageType) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}

const Dialogs = (props:DialogsPropsType) => {
    let state = props.dialogsPage;
    let dialogsElements =  state.dialogs.map((dialog: any)=> <DialogItem name={dialog.name} id={dialog.id}/>)
    let messagesElements = state.messages.map((dialog: any)=> <Message id={dialog.id} message={dialog.message}/>)
    let MessageBody = state.newMessageBody
    let onSendMessageClick = () => {
        props.sendMessage()
    }
    let onNewMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let body = e.target.value
        props.updateNewMessageBody(body);
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
                            // @ts-ignore
                                  onChange={onNewMessageChange}
                                  placeholder="enter your mess"
                        />
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Add Message</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;