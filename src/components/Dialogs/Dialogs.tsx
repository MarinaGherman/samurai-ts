import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Dialogs.module.scss';
import {DialogsType} from "../../redux/dialogsReducer";
import  {reduxForm,Field} from "redux-form";
import {Textarea} from "../common/formsControls/FormsControls";
import {maxlengthCreator, required} from "../../utils/validators/validators";

//DialogItem
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
//Message
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
    sendMessage: (newMessageBody:string) => void
    dialogsPage:DialogsType
    isAuth: boolean
}
//Dialogs
const Dialogs = (props:DialogsPropsType) => {

    let state = props.dialogsPage;
    let dialogsElements =  state.dialogs.map((dialog)=> <DialogItem name={dialog.name} id={dialog.id}/>)
    let messagesElements = state.messages.map((dialog)=> <Message id={dialog.id} message={dialog.message}/>)

    let addNewMessage = (values:any) => {
        props.sendMessage(values.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    );
};

//AddMessageForm

const maxLength50 = maxlengthCreator(50)
const AddMessageForm = (props:any) => {
    return  (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       name='newMessageBody'
                       placeholder="enter your mess"
                       validate={[required, maxLength50]}
                />

            </div>
            <div>
                <button>Add Message</button>
            </div>
        </form>
    )
}

const  AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;