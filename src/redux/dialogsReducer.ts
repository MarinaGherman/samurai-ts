

export const SEND_MESSAGE = 'SEND-MESSAGE';

export type ActionType = {
    type:  'SEND-MESSAGE';
    body:string
    newMessageBody: string
}
//AC
export let sendMessageActionCreator = (newMessageBody: newMessageBodyType) => ({
    type: SEND_MESSAGE,
    newMessageBody
})


//types
export type DialogType = {
    id: number
    name: string
}
export type MessagesTypes = {
    id: number
    message: string
}
export type newMessageBodyType = string

export type DialogsType ={
    dialogs: DialogType[]
    messages: MessagesTypes[]
    newMessageBody?: string
}
//state
let initialState: DialogsType = {
    dialogs: [
        {id:1, name: "Andrei"},
        {id:2, name: "Marina"},
        {id:3, name: "Sveta"}
    ],
    messages: [
        {id: 1, message: "rgergerge"},
        {id: 2, message: "Magdrfgdrgrina"},
        {id: 3, message: "Sendoff"}
    ]
}
//reducer
 const dialogsReducer = (state =initialState,action:ActionType) => {

    switch (action.type) {

        case SEND_MESSAGE:
            let body = action.newMessageBody;
           return {
               ...state,
               messages: [...state.messages, {id:6, message:body}]
           };
        default:
            return state;
    }
}
export default dialogsReducer;