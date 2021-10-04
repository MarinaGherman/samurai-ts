//types
export type Posts = {
    id: number
    message: string
    likeCount:number
}
export type DialogType = {
    name: string
    id: number
}
export type MessageType = {
    message: string
    id: number
}

export type ProfilePage = {
    posts: Array<Posts>
    newPostText: string
}
export type MessagesPageType = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>
    newMessageBody: string
}

export type StateType =  {
    profilePage: ProfilePage,
    messagesPage: MessagesPageType
}

export type ChangeNewPostTextType = any



export type DispatchType = {
    type: string,
    text?: string
}


//action type
export const ADD_POST = 'ADD-POST';
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
export const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
export const SEND_MESSAGE = 'SEND-MESSAGE';

//action creators
export let addPostActionCreator = () => ({
    type: ADD_POST
})
export let updateNewPostTextActionCreator =(text:string) => ({
    type: UPDATE_NEW_POST_TEXT,
    text
})
export let sendMessageActionCreator = () => ({
    type: SEND_MESSAGE
})
export let updateNewMessageBodyActionCreator =(text:string) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    text
})


//store
let store = {
    _state : {
        profilePage: {
            posts: [
                {id:1, message: "Hi, how are you?", likeCount: 12},
                {id:23, message: "It's my first post", likeCount: 132}
            ],
            newPostText: ''
        },
        messagesPage: {
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
    },
    getState() {
        return this._state
    },
    callSubscriber (state: StateType) {
        console.log(state)
    },
    subscribe(observer:any){
        this.callSubscriber = observer
    },

    dispatch(action: DispatchType) {
        if(action.type === ADD_POST) {

            let newPost = {
                id:5,
                message: this._state.profilePage.newPostText,
                likeCount: 0
            };
            this._state.profilePage.posts.push(newPost)
            this.callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            if (action.text !== undefined) {
                this._state.profilePage.newPostText = action.text;
                this.callSubscriber(this._state);
            }
            this.callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            if(action.text !== undefined) {
                this._state.messagesPage.newMessageBody = action.text;
                this.callSubscriber(this._state);
            }
        } else  if (action.type === SEND_MESSAGE) {
            let text = this._state.messagesPage.newMessageBody
            this._state.messagesPage.messages.push({id: 4, message: text});
            this._state.messagesPage.newMessageBody = ''
            this.callSubscriber(this._state);
        }
    }
}

export default store;