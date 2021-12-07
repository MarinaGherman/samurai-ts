import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Dialogs.module.scss';
import {DialogsType} from "../../redux/dialogsReducer";


type DialogItemType = {
    name: string
    id:number
}
const DialogItem = ({name, id}: DialogItemType) => {
    return(
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={"/dialogs/" + id} >{name}</NavLink>
        </div>
    )
}

 type MessageType = {
    id: number
    message:string
}

const Message = (props: MessageType) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}

type DialogsPropsType = {
    updateNewMessageBody:(body:string) => void
    sendMessage: () => void
    dialogsPage:DialogsType
    isAuth: boolean
}

const Dialogs = (props:DialogsPropsType) => {

    let state = props.dialogsPage;
    let dialogsElements =  state.dialogs.map((dialog)=> <DialogItem name={dialog.name} id={dialog.id}/>)
    let messagesElements = state.messages.map((dialog)=> <Message id={dialog.id} message={dialog.message}/>)
    let MessageBody = state.newMessageBody
    let onSendMessageClick = () => {
        props.sendMessage()
    }
    let onNewMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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