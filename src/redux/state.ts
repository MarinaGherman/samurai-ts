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
}

export type ProfilePage = {
    posts: Array<Posts>
    newPostText: string
}
export type MessagesPageType = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>
}

export type StateType =  {
    profilePage: ProfilePage,
    messagesPage: MessagesPageType
}

export type ChangeNewPostTextType = any

//store

export type DispatchType = {
    type: string,
    text?: string
}

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
                { message: "rgergerge"},
                { message: "Magdrfgdrgrina"},
                { message: "Sendoff"}
            ]
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
        if(action.type === "ADD-POST") {

            let newPost = {
                id:5,
                message: this._state.profilePage.newPostText,
                likeCount: 0
            };
            this._state.profilePage.posts.push(newPost)
            this.callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            if (action.text)
                this._state.profilePage.newPostText = action.text;
            this.callSubscriber(this._state)
        }

    }
}

export default store;