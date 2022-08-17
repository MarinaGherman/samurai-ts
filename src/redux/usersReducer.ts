import {usersAPI} from "../api/api";
import { AppThunkDispatch} from "./redux-store";
import {setAppErrorAC, setAppStatusAC} from "./app-reducer";
import {handleServerNetworkError} from "../utils/errorUtils";

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

export type UsersPageType = {
    users: UserType[]
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
    following: (string | number)[]
}


const initialState: UsersPageType = {
    users: [],
    pageSize: 7,
    totalCount: 1,
    currentPage: 1,
    isFetching: true,
    following: [],
}


export const usersReducer = (state: UsersPageType = initialState, action: UserActionType): UsersPageType => {
    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)}
        case UNFOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)}
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USER_COUNT:
            return {...state, totalCount: action.totalCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state, following: !action.followingIsProgress
                    ? state.following.filter((id: (string | number)) => id !== action.userId)
                    : [...state.following, action.userId]
            }
        default:
            return state;
    }
}
export const followSuccess = (userId: number) => ({type: FOLLOW, userId } as const)
export const unfollowSuccess = (userId: number) => ({type: UNFOLLOW, userId } as const)
export const setUsers = (users: Array<UserType>) => ({type: SET_USERS, users } as const)
export const setTotalCurrentCount =(totalCount:number) => ({type: SET_TOTAL_USER_COUNT, totalCount } as const)
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage } as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching } as const)
export const toggleFollowingProgress = (followingIsProgress: boolean, userId: number) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, followingIsProgress, userId } as const)


export type followSuccessACT = ReturnType<typeof followSuccess>;
export type unfollowSuccessACT = ReturnType<typeof unfollowSuccess>;
export type setUsersACT = ReturnType<typeof setUsers>;
export type setCurrentPageACT = ReturnType<typeof setCurrentPage>;
export type toggleIsFetchingACT = ReturnType<typeof toggleIsFetching>;
export type toggleFollowingProgressACT = ReturnType<typeof toggleFollowingProgress>;
export type setTotalCurrentCountACT = ReturnType<typeof setTotalCurrentCount>;
export type UserActionType = followSuccessACT | unfollowSuccessACT | setUsersACT | setCurrentPageACT | toggleIsFetchingACT | toggleFollowingProgressACT | setTotalCurrentCountACT


//санки
export const getUsersTC = (currentPage: number, pageSize: number) => async (dispatch: AppThunkDispatch) => {
    dispatch(toggleIsFetching(true));
    const { items, totalCount} = await usersAPI.getUsers(currentPage, pageSize)
    try {
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(items));
        dispatch(setTotalCurrentCount(totalCount));
    } catch (error: any) {
        console.log("Error when you try get users", error)
        handleServerNetworkError(error, dispatch)
    }
}

export const followTC = (userId: number) => async (dispatch: AppThunkDispatch) => {
    dispatch(toggleFollowingProgress(true, userId));

    let response = await usersAPI.follow(userId)
    try {
        if (response.data.resultCode === 0) {
            dispatch(followSuccess(userId));
        } else{
            dispatch(setAppErrorAC("Some error occupied"));
            dispatch(setAppStatusAC("failed"));
        }
        dispatch(toggleFollowingProgress(false, userId));
    } catch (error: any) {
        console.log("Error when you try follow user", error)
        handleServerNetworkError(error, dispatch)
    }
}

export const unfollowTC = (userId:number) => async (dispatch: AppThunkDispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    let response = await usersAPI.unfollow(userId)
    try {
        if (response.data.resultCode === 0) {
            dispatch(unfollowSuccess(userId));
        } else{
            dispatch(setAppErrorAC("Some error occupied"));
            dispatch(setAppStatusAC("failed"));
        }
        dispatch(toggleFollowingProgress(false, userId));
    } catch (error: any) {
        console.log("Error when you try unfollow user", error)
        handleServerNetworkError(error, dispatch)
    }
}



export default usersReducer;