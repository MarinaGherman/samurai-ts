import { DispatchType, MessagesPageType} from "./store";

export const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
export const SEND_MESSAGE = 'SEND-MESSAGE';

export let sendMessageActionCreator = () => ({
    type: SEND_MESSAGE
})
export let updateNewMessageBodyActionCreator =(text:string) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    text
})

let initialState= {
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

 const dialogsReducer = (state:MessagesPageType =initialState,action:DispatchType) => {
     console.log(action)
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            if (action.text !== undefined) {
                state.newMessageBody = action.text;
            }
            return state;

        case SEND_MESSAGE:
            let text = state.newMessageBody
            state.messages.push({id: 4, message: text});
            state.newMessageBody = ''

            return state;
        default:
            return state;
    }
}
export default dialogsReducer;