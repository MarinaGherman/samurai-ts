import { profileAPI, ProfileRequestType, usersAPI} from "../api/api";
import {PhotosType} from "./usersReducer";
import {AppThunkDispatch} from "./redux-store";

export const ADD_POST = 'ADD-POST';
export const SET_USER_PROFILE = 'SET_USER_PROFILE';
export const SET_STATUS = 'SET_STATUS';
export const DELETE_POST = 'DELETE_POST';
export const SAVE_PHOTO = 'SAVE_PHOTO';


export type PostType = {
    id: number | null
    message: string | null
    likeCount:number
}
export type ProfileType = ProfileRequestType & {
    aboutMe?: string | undefined
}

//state
let initialState = {
    posts: [
        {id:1, message: "Hi, how are you?", likeCount: 12},
        {id:23, message: "It's my first post", likeCount: 132}
    ],
    profile: null,
    status: "",
    newPostText: '',
}
type InitialStateType = typeof initialState;

const profileReducer = (state:InitialStateType = initialState, action: ProfileActionType):InitialStateType => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                //@ts-ignore
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
                //@ts-ignore
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
        case SAVE_PHOTO:
            //@ts-ignore
            return {...state, profile: {...state.profile, photos: action.photos}}
        default:
            return state;
    }
}

//actionCreators
export let addPostActionCreator = (newPostText: string) => ({
    type: ADD_POST,
    newPostText
} as const)

export let setUserProfile = (profile:ProfileType) => ({
    type: SET_USER_PROFILE,
    profile
} as const)
export let setStatus = (status:string) => ({
    type: SET_STATUS,
    status
} as const)
export let deletePost = (postId:number) => ({
    type: DELETE_POST,
    postId
} as const)
export let savePhotoSuccess = (photos:PhotosType) => ({
    type: SAVE_PHOTO,
    photos
} as const)
//AC TYPE
export type addPostActionCreatorACT = ReturnType<typeof addPostActionCreator>;
export type setUserProfileACT = ReturnType<typeof setUserProfile>;
export type setStatusACT = ReturnType<typeof setStatus>;
export type deletePostACT = ReturnType<typeof deletePost>;
export type savePhotoSuccessACT = ReturnType<typeof savePhotoSuccess>;
export type ProfileActionType = addPostActionCreatorACT | setUserProfileACT | setStatusACT | deletePostACT | savePhotoSuccessACT



//thunk creator
export let getUserProfile = (userId:number) => async (dispatch:AppThunkDispatch) => {
    let response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response.data));

}

export let getStatus = (userId:number) => async (dispatch:AppThunkDispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data));

}

export let updateStatus = (status:string) => async (dispatch:AppThunkDispatch) => {
    let response = await profileAPI.updateStatus(status)
    if(response.data.resultCode === 0)
        dispatch(setStatus(status));
}
export let savePhoto = (file:any) => async (dispatch:AppThunkDispatch) => {
    let response = await profileAPI.savePhoto(file)
    if(response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}
export let saveProfile = (profile:any) => async (dispatch:AppThunkDispatch, getState:any ) => {
    const userId = getState().auth.userId;
    let response = await profileAPI.saveProfile(profile)
    if(response.data.resultCode === 0) {
        // @ts-ignore
        await dispatch(getUserProfile(userId))
    }
}

export default profileReducer;