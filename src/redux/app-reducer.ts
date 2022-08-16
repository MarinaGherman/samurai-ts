import {getAuthUserData} from "./auth-reducer";
import {AppThunkDispatch} from "./redux-store";

const APP_STATUS= 'APP_STATUS';
const APP_ERROR= 'APP_ERROR';
const INITIALIZING_SUCCESS= 'INITIALIZING_SUCCESS';
export type NullableType<T> = null | T


const initialState = {
    error: null as NullableType<string>,
    status: "idle" as RequestStatusType,
    initialized: false
}
type InitialStateType = typeof initialState;
export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed';



export const AppReducer = (state: InitialStateType = initialState, action: appActionType): InitialStateType => {
    switch (action.type) {
        case APP_ERROR:
            //@ts-ignore
            return {...state, error: action.error}
        case APP_STATUS:
            //@ts-ignore
            return {...state, status: action.status}
        case INITIALIZING_SUCCESS :
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

//AC
export const setAppErrorAC = (error: NullableType<string>) => ({type: 'APP_ERROR', error} as const);
export const setAppStatusAC = (status: RequestStatusType) => ({ type:'APP_STATUS' , status} as const);
export const initializingSuccess = () => ({type: INITIALIZING_SUCCESS})
//AC TYPE
export type setAppErrorACActionType = ReturnType<typeof setAppErrorAC>;
export type setAppStatusACCActionType = ReturnType<typeof setAppStatusAC>;
export type initializingSuccessActionType = ReturnType<typeof initializingSuccess>;
export type appActionType = setAppErrorACActionType | setAppStatusACCActionType | initializingSuccessActionType

export const initializeApp = () => (dispatch:AppThunkDispatch) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
        .then(() => {
            dispatch(initializingSuccess())
        })

}
export default AppReducer;