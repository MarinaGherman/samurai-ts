import {authApi} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA= 'SET_USER_DATA';


let initialState ={
    userId: null,
    email: null,
    login: null,
    isAuth: false
}
const AuthReducer = (state:any = initialState,action:any) => {
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
export const setAuthUserData:any = (userId:number, email:string, login:string, isAuth:boolean) => ({type: SET_USER_DATA, payload: {userId,email,login,isAuth}})

//thunk
export const getAuthUserData = () => (dispatch:any) => {
    authApi.me()
        .then((response) => {
            if (response.data.resultCode === 0) {
                let {id,login,email} = response.data.data;
                dispatch(setAuthUserData(id,login,email, true))
            }
        });
}

export const login = (email:string, password:string, rememberMe:boolean) => (dispatch:any) => {
    let action = stopSubmit('login', {_error: "Email is wrong"});
    dispatch(action);

    authApi.login(email,password,rememberMe)
        .then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {

            }
        });
}
export const logout = () => (dispatch:any) => {
    authApi.logout()
        .then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        });
}

export default AuthReducer;