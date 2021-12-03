
export const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
export const SEND_MESSAGE = 'SEND-MESSAGE';


export let sendMessageActionCreator = () => ({
    type: SEND_MESSAGE
})
export let updateNewMessageBodyActionCreator =(text:string) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    text
})

export type ActionType = {
    type: string;
    body:string
}

export type DialogsType = {
    id: number
    name: string
}
export type MessagesTypes = {
    id: number
    message: string
}
export type newMessageBodyType = string

export type DialogType ={
    dialogs: DialogsType[]
    messages: MessagesTypes[]
    newMessageBody: newMessageBodyType
}

let initialState: DialogType = {
    dialogs: [
        {id:1, name: "Andrei"},
        {id:2, name: "Marina"},
        {id:3, name: "Sveta"}
    ],
    messages: [
        {id: 1, message: "rgergerge"},
        {id: 2, message: "Magdrfgdrgrina"},
        {id: 3, message: "Sendoff"}
    ],
    newMessageBody: ''
}

 const dialogsReducer = (state =initialState,action:ActionType) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody:action.body
            };

        case SEND_MESSAGE:
            let body = state.newMessageBody;
           return {
               ...state,
               newMessageBody:'',
               messages: [...state.messages, {id:6, message:body}]
           };
        default:
            return state;
    }
}
export default dialogsReducer;