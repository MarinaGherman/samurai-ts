

let rerenderEntireTree = () => {
    console.log('state')
}
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

let state = {
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
}

export type AddPostType = any
export let addPost: AddPostType =(postMessage: string) => {

    let newPost = {
        id:5,
        message: postMessage,
        likeCount: 0
    };
    state.profilePage.posts.push(newPost)
    rerenderEntireTree();
}

export type ChangeNewPostTextType = any
export let updateNewPostText: ChangeNewPostTextType = (text: string) => {
    state.profilePage.newPostText = text;
    rerenderEntireTree();
}

export const subscribe = (observer:any) => {
    rerenderEntireTree = observer

}

export default state;