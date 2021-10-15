import {DispatchType, ProfilePage} from "./store";


export const ADD_POST = 'ADD-POST';
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export let addPostActionCreator = () => ({
    type: ADD_POST
})
export let updateNewPostTextActionCreator =(text:string) => ({
    type: UPDATE_NEW_POST_TEXT,
    text
})

let initialState = {
    posts: [
        {id:1, message: "Hi, how are you?", likeCount: 12},
        {id:23, message: "It's my first post", likeCount: 132}
    ],
    newPostText: ''
}

const profileReducer = (state:ProfilePage = initialState,action:DispatchType) => {

    switch (action.type) {
        case  ADD_POST:
            let newPost = {
                id:5,
                message: state.newPostText,
                likeCount: 0
            };
            state.posts.push(newPost)

            return state;

        case UPDATE_NEW_POST_TEXT:
            if (action.text !== undefined) {
                state.newPostText = action.text;
            }
            return state;

        default:
            return state;
    }
}

export default profileReducer;