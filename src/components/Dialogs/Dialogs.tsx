import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.scss';
import  {
    DialogType,
} from "../../redux/store";
const DialogItem = ({name, id}: DialogType) => {
    return(
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={"/dialogs/" + id} >{name}</NavLink>
        </div>
    )
}

type PropsType = any

const Message = (props: PropsType) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}

export type Props = {
    updateNewMessageBody?:any
    sendMessage?:any
    dialogsPage?:any
}

const Dialogs = (props:Props) => {

    let state = props.dialogsPage;

    let dialogsElements =  state.dialogs.map((dialog: any)=> <DialogItem name={dialog.name} id={dialog.id}/>)
    let messagesElements = state.messages.map((dialog: any)=> <Message id={dialog.id} message={dialog.message}/>)
    let MessageBody = state.newMessageBody


    let onSendMessageClick = () => {
        props.sendMessage()
    }
    let onNewMessageChange = (e: any) => {
        let body = e.target.value
        props.updateNewMessageBody(body);
        // store.dispatch(updateNewMessageBodyActionCreator(body))
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