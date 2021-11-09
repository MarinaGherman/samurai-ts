// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import { connect } from 'react-redux';
import {followAC, setCurrentPageAC, setUsersAC, unfollowAC} from "../../redux/usersReducer";
import axios from "axios";
import Users from "./Users";


class UsersContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${`this.props.currentPage`}&count=${`this.props.pagesSize`}`)
            .then((response: any) => {
                // @ts-ignore
                this.props.setUsers(response.data.items)
            });
    }

    onPageChanged = (pageNumber:number) => {
        // @ts-ignore
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${`this.props.pagesSize`}`)
            .then((response: any) => {
                // @ts-ignore
                this.props.setUsers(response.data.items)
            });
    }


    render() {
        return <Users
            // @ts-ignore
            users={this.props.users}
            // @ts-ignore
            totalUsersCount={this.props.totalUsersCount}
            // @ts-ignore
            pagesSize={this.props.pagesSize}
            // @ts-ignore
            currentPage={this.props.currentPage}
            // @ts-ignore
            onPageChanged={this.onPageChanged}
            // @ts-ignore
            follow={this.props.follow}
            // @ts-ignore
            unfollow={this.props.unfollow}
        />
    }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);