import {profileAPI, usersApi} from "../api/api";

export const ADD_POST = 'ADD-POST';
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
export const SET_USER_PROFILE = 'SET_USER_PROFILE';
export const SET_STATUS = 'SET_STATUS';

//state
let initialState = {
    posts: [
        {id:1, message: "Hi, how are you?", likeCount: 12},
        {id:23, message: "It's my first post", likeCount: 132}
    ],
    newPostText: '',
    profile: null,
    status: ""
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
        case SET_USER_PROFILE: {
            return {
                ...state, profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state, status: action.status
            }
        }
        default:
            return state;
    }
}

//actionCreators
export let addPostActionCreator = () => ({
    type: ADD_POST
})
export let updateNewPostTextActionCreator = (text:string) => ({
    type: UPDATE_NEW_POST_TEXT,
    text
})
export let setUserProfile = (profile:any) => ({
    type: SET_USER_PROFILE,
    profile
})
export let setStatus = (status:string) => ({
    type: SET_STATUS,
    status
})


//thunk creator
export let getUserProfile = (userId:number) => (dispatch:any) => {
    usersApi.getProfile(userId)
        .then((response: any) => {
            dispatch(setUserProfile(response.data));
        });
}

export let getStatus = (userId:number) => (dispatch:any) => {
    profileAPI.getStatus(userId)
        .then((response: any) => {
            dispatch(setStatus(response.data));
        });
}

export let updateStatus = (status:string) => (dispatch:any) => {
    profileAPI.updateStatus(status)
        .then((response: any) => {
            if(response.data.resultCode === 0)
            dispatch(setStatus(status));
        });
}


export default profileReducer;