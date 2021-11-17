const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [ ],
    pagesSize: 5,
    totalUsersCount: 20,
    currentPage: 2,
    isFetching: true,
    followingInProgress: []
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
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return { ...state,
                followingInProgress: action.isFetching
                ? [...state.followingInProgress, action.userId]
                : state.followingInProgress.filter((id:number) => id !== action.userId )
            }
        }
        default:
            return state;
    }
}


export const follow = (userId: number) => ({type: FOLLOW, userId })
export const unfollow = (userId: number) => ({type: UNFOLLOW, userId })
export const setUsers = (users: any) => ({type: SET_USERS, users })
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage })
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching })
export const toggleFollowingProgress = (isFetching: boolean, userId: number) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId })

export default usersReducer;