import { profileAPI, usersAPI} from "../api/api";
import {PhotosType} from "./usersReducer";
import {AppStoreType, AppThunkDispatch} from "./redux-store";
import {setAppStatusAC} from "./app-reducer";
import {handleServerAppError, handleServerNetworkError} from "../utils/errorUtils";

export const ADD_POST = 'ADD-POST';
export const SET_USER_PROFILE = 'SET_USER_PROFILE';
export const SET_STATUS = 'SET_STATUS';
export const DELETE_POST = 'DELETE_POST';
export const SAVE_PHOTO = 'SAVE_PHOTO';

export type ProfileType = {
    userId:  string | number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    aboutMe?: string | undefined
    contacts: ContactsRequestType
    photos?: PhotoRequestType

}

export type ContactsRequestType = {
    github: string
    vk: string
    facebook: string
    instagram:  string
    twitter:  string
    website:  string
    youtube: string
    mainLink: string
}
export type PhotoRequestType = {
    small: string
    large: string
}

//state
let initialState = {
    posts: [
        {id:1, message: "Hi, how are you?", likeCount: 12},
        {id:23, message: "It's my first post", likeCount: 132}
    ],
    profile: undefined,
    status: "",
    newPostText: '',
}
export type InitialStateType = typeof initialState;

const profileReducer = (state:InitialStateType = initialState, action: ProfileActionType):InitialStateType => {

    switch (action.type) {
        case ADD_POST: {
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
export let getUserProfile = (userId:any) => async (dispatch:AppThunkDispatch) => {
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
        await dispatch(getUserProfile(userId))
    }
}
export const updateProfileTC = (profile: ProfileType) => async (dispatch: AppThunkDispatch, getState: () => AppStoreType) => {

    dispatch(setAppStatusAC("loading"));

    const userId = getState().auth.data.userId
    try {
        let res = await profileAPI.updateProfile(profile)
        if (res.data.resultCode === 0) {
            await dispatch( getUserProfile(userId))
            dispatch(setAppStatusAC("succeeded"));
        } else {
            handleServerAppError(res.data, dispatch);
        }
    } catch (error: any) {
        console.log("Error when you try update profile", error)
        handleServerNetworkError(error, dispatch)
    }
}

export default profileReducer;