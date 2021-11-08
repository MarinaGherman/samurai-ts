// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import { connect } from 'react-redux';
import Users from "./Users";
import {followAC, setCurrentPageAC, setUsersAC, unfollowAC} from "../../redux/usersReducer";

let mapStateToProps = (state:any) => {
    return{
        users: state.usersPage.users,
        pagesSize: state.usersPage.pagesSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}
let mapDispatchToProps = (dispatch:any) => {
    return {
        follow: (userId: any) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: any) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: any) => {
            dispatch(setUsersAC(users))

        },
        setCurrentPage: (pageNumber:number) => {
            dispatch(setCurrentPageAC(pageNumber))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);