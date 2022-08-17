import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {AppThunkDispatch} from "./redux-store";


const SET_USER_DATA= 'samurai-ts/auth/SET_USER_DATA';

let initialState ={
    userId: '',
    email: '',
    login: '',
    isAuth: false
}
type InitialStateType = typeof initialState;

const AuthReducer = (state:InitialStateType = initialState,action:ActionAuthType):InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA :
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}
//AC
export const setAuthUserData = (userId:string, email:string, login:string, isAuth:boolean) => ({type: SET_USER_DATA, payload: {userId,email,login,isAuth}})
export type setAuthUserDataActionType = ReturnType<typeof setAuthUserData>;
export type ActionAuthType = setAuthUserDataActionType
//thunk
export const getAuthUserData = () => async (dispatch:AppThunkDispatch) => {
    let response = await authAPI.me()
            if (response.data.resultCode === 0) {
                let {id,login,email} = response.data.data;
                // @ts-ignore
                dispatch(setAuthUserData(id,login,email, true))
            }
}

export const loginTC = (email:string, password:string, rememberMe:boolean) => async (dispatch:AppThunkDispatch) => {
    let response = await authAPI.login(email,password,rememberMe)
            if (response.data.resultCode === 0) {
                await dispatch(getAuthUserData())
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
                dispatch(stopSubmit('login', {_error: message}));
            }

}
export const logoutTC = () => async (dispatch:AppThunkDispatch) => {
    let response = await authAPI.logout()

            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData('', '', '', false))
            }
}

export default AuthReducer;