import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Dialogs.module.scss';
import {DialogsType} from "../../redux/dialogsReducer";
import  {reduxForm,Field} from "redux-form";


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
                <AddMessageFormRedux/>
            </div>
        </div>
    );
};
const AddMessageForm = (props:any) => {
    return  (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component= 'textarea' name='newMessageBody' placeholder="enter your mess" />

            </div>
            <div>
                <button>Add Message</button>
            </div>
        </form>
    )
}

const  AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;