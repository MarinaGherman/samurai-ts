import {getAuthUserData} from "./auth-reducer";


const INITIALIZING_SUCCESS= 'INITIALIZING_SUCCESS';

let initialState ={
    initialized: false
}
const AppReducer = (state:any = initialState,action:any) => {
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

//thunk
export const initializeApp = () => (dispatch:any) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
        .then(() => {
            dispatch(initializingSuccess())
        })

}


export default AppReducer;