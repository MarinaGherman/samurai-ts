import {getAuthUserData} from "./auth-reducer";
import {AppThunkDispatch} from "./redux-store";
const INITIALIZING_SUCCESS= 'INITIALIZING_SUCCESS';

const initialState = {
    initialized: false
}
type InitialStateType = typeof initialState;

const AppReducer = (state:InitialStateType = initialState,action:appActionType): InitialStateType => {
    switch (action.type) {
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
export const initializingSuccess = () => ({type: INITIALIZING_SUCCESS})
//AC TYPE
export type initializingSuccessActionType = ReturnType<typeof initializingSuccess>;
export type appActionType = initializingSuccessActionType

//thunk
export const initializeApp = () => (dispatch:AppThunkDispatch) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
        .then(() => {
            dispatch(initializingSuccess())
        })

}


export default AppReducer;