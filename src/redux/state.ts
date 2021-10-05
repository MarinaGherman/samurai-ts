
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

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
        },
        sidebar: {}
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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this.callSubscriber(this._state);
    }
}

export default store;