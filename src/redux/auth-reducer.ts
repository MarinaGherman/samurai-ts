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
                ...state, ...action.data, isAuth:true
            }


        default:
            return state;
    }
}

export const setAuthUserData:any = (userId:number, email:string, login:string) => ({type: SET_USER_DATA, data: {userId,email,login}})

export default AuthReducer;