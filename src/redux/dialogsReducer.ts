
export const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
export const SEND_MESSAGE = 'SEND-MESSAGE';

export let sendMessageActionCreator = () => ({
    type: SEND_MESSAGE
})
export let updateNewMessageBodyActionCreator =(text:string) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    text
})

 const dialogsReducer = (state:any,action:any) => {
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