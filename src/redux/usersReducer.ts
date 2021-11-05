

export let FOLLOW = () => ({
    type: FOLLOW
})
export let UNFOLLOW =() => ({
    type: UNFOLLOW
})
export let SET_USERS =() => ({
    type: SET_USERS
})

let initialState = {
    users: [
        // {id:1, followed: false, photoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyM1UJLHjiRFSx7VbTGBUTdsiUJJ9OLYyPEwKW7VfQsTRDLC6BHbsWqdccqFdewpOwBTU&usqp=CAU",
        //     fullName: "Marina", status: "i am a boss", location: {city: 'Como',country: 'Italy'}},
        // {id:2, followed: false, photoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyM1UJLHjiRFSx7VbTGBUTdsiUJJ9OLYyPEwKW7VfQsTRDLC6BHbsWqdccqFdewpOwBTU&usqp=CAU",
        //     fullName: "Andrei", status: "i am a big boss", location: {city: 'Preganziol',country: 'Italy'}},
        // {id:3, followed: true,photoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyM1UJLHjiRFSx7VbTGBUTdsiUJJ9OLYyPEwKW7VfQsTRDLC6BHbsWqdccqFdewpOwBTU&usqp=CAU",
        //     fullName: "Dmitry", status: "Hello world", location: {city: 'Minsk',country: 'Belorus'}}
    ]
}

const usersReducer = (state:any = initialState,action:any) => {

    switch (action.type) {
        case FOLLOW :
            return {
                ...state,
                //users: [...state.users]
                users: state.users.map((m:any) =>{
                    if(m.id === action.userId) {
                        return {...m, followed: true}
                    }
                    return m;
                })
            }

        case UNFOLLOW :
            return {
                ...state,
                users: state.users.map((m:any) =>{
                    if(m.id === action.userId) {
                        return {...m, followed: false}
                    }
                    return m;
                })
            }
        case SET_USERS: {
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        }
        default:
            return state;
    }
}

export const followAC = (userId:any) => ({type: 'FOLLOW',userId})
export const unfollowAC = (userId:any) => ({type: 'UNFOLLOW',userId})
export const setUsersAC = (users:any) => ({type: 'SET_USERS',users})

export default usersReducer;