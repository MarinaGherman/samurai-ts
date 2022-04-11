import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT';

export type PhotosType = {
    small?: string
    large?: string
}

export type UserType = {
    id: any
    name: string
    status:string
    followed: boolean
    photos : PhotosType

}

export type UsersType = {
    users: Array<UserType>
    pagesSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: Array<UserType>

}
let initialState = {
    users: [ ],
    pagesSize: 10,
    totalUsersCount: 20,
    currentPage: 2,
    isFetching: true,
    followingInProgress: []
};

const usersReducer = (state:UsersType = initialState, action:UserActionType) => {
    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( (u:UserType) =>  {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( (u:UserType) =>  {
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
        case SET_TOTAL_USER_COUNT: {
            return { ...state, totalUserCount: action.count}
        }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {

            return { ...state,
                followingInProgress: action.isFetching
                ? [...state.followingInProgress, action.userId]
                : state.followingInProgress.filter((id) =>
                        // @ts-ignore
                        id !== action.userId )
            }
        }
        default:
            return state;
    }
}
type UserActionType = {
    count: number;
    isFetching: boolean;
    currentPage: number;
    type: 'FOLLOW' | 'UNFOLLOW' | 'SET_USERS' | 'SET_CURRENT_PAGE' | 'TOGGLE_IS_FETCHING' | 'TOGGLE_IS_FOLLOWING_PROGRESS' | 'SET_TOTAL_USER_COUNT';
    userId: number;
    users: Array<UserType>;
}
export const followSuccess = (userId: number) => ({type: FOLLOW, userId })
export const unfollowSuccess = (userId: number) => ({type: UNFOLLOW, userId })
export const setUsers = (users: Array<UserType>) => ({type: SET_USERS, users })
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage })
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching })
export const toggleFollowingProgress = (isFetching: boolean, userId: number) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId })
export const setTotalCurrentCount =(totalUserCount:number) => ({type: SET_TOTAL_USER_COUNT, count: totalUserCount })

type DispatchCommonType = (dispatch:DispatchType) => void
type DispatchType = {
    type: string
    isFetching?: boolean
    users?: UserType[]
    count?: number
}

//санки
export const requestUsers = (page:number, pageSize:number) => {
    return async (dispatch: DispatchCommonType) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(page))
        let data = await usersAPI.getUsers(page, pageSize)
                dispatch(toggleIsFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalCurrentCount(data.totalCount))

    }
}

const followUnfollowFlow = async (dispatch:DispatchCommonType, userId: number, apiMethod:  any, actionCreator:any )=> {
     dispatch(toggleFollowingProgress(true, userId))
    let data = await  apiMethod(userId)
    if(data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))
}

export const follow = (userId:number) => {
    return async (dispatch:DispatchCommonType) => {
        let apiMethod = usersAPI.follow.bind(usersAPI)
         await followUnfollowFlow(dispatch, userId, apiMethod, followSuccess)

    }
}

export const unfollow = (userId:number) => {

    return async (dispatch:DispatchCommonType) => {
        let apiMethod = usersAPI.unfollow.bind(usersAPI)
         await followUnfollowFlow(dispatch, userId, apiMethod, unfollowSuccess)
    }
}

export default usersReducer;