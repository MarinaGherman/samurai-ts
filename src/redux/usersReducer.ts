const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    users: [ ],
    pagesSize: 5,
    totalUsersCount: 20,
    currentPage: 2,
    isFetching: true
};

const usersReducer = (state = initialState, action: {
    isFetching: boolean;
    currentPage: number;
    type: any; userId: any; users: any; }) => {
    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( (u:any) =>  {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( (u:any) =>  {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return { ...state, users: action.users }
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage}
        }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching}
        }
        default:
            return state;
    }
}


export const followAC = (userId: any) => ({type: FOLLOW, userId })
export const unfollowAC = (userId: any) => ({type: UNFOLLOW, userId })
export const setUsersAC = (users: any) => ({type: SET_USERS, users })
export const setCurrentPageAC = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage })
export const toggleIsFetchingAC = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching })

export default usersReducer;