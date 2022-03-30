import {profileAPI, usersApi} from "../api/api";
import {PhotosType} from "./usersReducer";


export const ADD_POST = 'ADD-POST';
export const SET_USER_PROFILE = 'SET_USER_PROFILE';
export const SET_STATUS = 'SET_STATUS';
export const DELETE_POST = 'DELETE_POST';


export type PostType = {
    id: number
    message: string
    likeCount:number
}
export type PostsType = {
    posts: PostType[]
    profile: ProfileType | null
    status:string
}

type ContactsType = {
        skype?: string,
        vk?: string,
        facebook?: string,
        icq?: string
        email?: string,
        googlePlus?: string,
        twitter?: string,
        instagram?: string,
        whatsApp?: string
}

export type ProfileType = {
    aboutMe?: string | undefined
    lookingForAJob?: boolean | undefined
    lookingForAJobDescription?:string | undefined
    fullName?:string  | undefined
    userId?:number  | undefined
    contacts?: ContactsType | undefined
    photos?:PhotosType | undefined
}

export type ActionType = {
    newPostText: string;
    type: 'SET_USER_PROFILE' | 'SET_STATUS' |'ADD-POST' | "DELETE_POST"
    text:string
    profile:ProfileType
    status:string
    postId: number
}


//state
let initialState = {
    posts: [
        {id:1, message: "Hi, how are you?", likeCount: 12},
        {id:23, message: "It's my first post", likeCount: 132}
    ],
    profile: null,
    status: ""
}

const profileReducer = (state:PostsType = initialState,action:ActionType) => {

    switch (action.type) {
        case  ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likeCount: 0
            };
            return  {
                ...state,
                posts : [...state.posts, newPost],
                newPostText: ''
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
        case DELETE_POST: {
            return {
                ...state, posts: state.posts.filter(f=> f.id !== action.postId)
            }
        }
        default:
            return state;
    }
}

//actionCreators
export let addPostActionCreator = (newPostText: any) => ({
    type: ADD_POST,
    newPostText
})

export let setUserProfile = (profile:string) => ({
    type: SET_USER_PROFILE,
    profile
})
export let setStatus = (status:string) => ({
    type: SET_STATUS,
    status
})
export let deletePost = (postId:number) => ({
    type: DELETE_POST,
    postId
})




type DispatchCommonType = (dispatch:DispatchType) => void
type DispatchType = {
    type: string
}


//thunk creator
export let getUserProfile = (userId:number) => (dispatch:DispatchCommonType) => {
    usersApi.getProfile(userId)
        .then((response) => {
            dispatch(setUserProfile(response.data));
        });
}

export let getStatus = (userId:number) => (dispatch:DispatchCommonType) => {
    profileAPI.getStatus(userId)
        .then((response) => {
            dispatch(setStatus(response.data));
        });
}

export let updateStatus = (status:string) => (dispatch:DispatchCommonType) => {
    profileAPI.updateStatus(status)
        .then((response) => {
            if(response.data.resultCode === 0)
            dispatch(setStatus(status));
        });
}


export default profileReducer;