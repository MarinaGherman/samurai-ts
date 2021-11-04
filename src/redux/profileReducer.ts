
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

const profileReducer = (state:any = initialState,action:any) => {

    switch (action.type) {
        case  ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCount: 0
            };
            return  {
                ...state,
                posts : [...state.posts, newPost],
                newPostText: ''
            }
        }

        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.text
            }
        }
        default:
            return state;
    }
}

export default profileReducer;