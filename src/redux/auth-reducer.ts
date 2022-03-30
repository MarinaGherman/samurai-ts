import {authApi} from "../api/api";
import {stopSubmit} from "redux-form";


const SET_USER_DATA= 'samurai-ts/auth/SET_USER_DATA';


type AuthType ={
    userId: number,
    email: string,
    login: string,
    isAuth: boolean
}

 type ActionAuthType = {
    type: 'samurai-ts/auth/SET_USER_DATA' ,
     payload: AuthType

}

let initialState ={
    userId: 1,
    email: '',
    login: '',
    isAuth: false
}
const AuthReducer = (state:AuthType = initialState,action:ActionAuthType) => {
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
export const setAuthUserData = (userId:number, email:string, login:string, isAuth:boolean) => ({type: SET_USER_DATA, payload: {userId,email,login,isAuth}})

//thunk
export const getAuthUserData = () => async (dispatch:any) => {
    let response = await authApi.me()
            if (response.data.resultCode === 0) {
                let {id,login,email} = response.data.data;
                dispatch(setAuthUserData(id,login,email, true))
            }
}

export const login = (email:string, password:string, rememberMe:boolean) => async (dispatch:any) => {
    let response = await authApi.login(email,password,rememberMe)
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
                dispatch(stopSubmit('login', {_error: message}));
            }

}
export const logout = () => async (dispatch:any) => {
    let response = await authApi.logout()

            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(1, '', '', false))
            }
}

export default AuthReducer;