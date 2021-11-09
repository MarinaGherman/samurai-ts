// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import { connect } from 'react-redux';
import {followAC, setCurrentPageAC, setUsersAC, toggleIsFetchingAC, unfollowAC} from "../../redux/usersReducer";
import axios from "axios";
import Users from "./Users";
import Loader from "../common/Loader";


class UsersContainer extends React.Component {
    componentDidMount() {
        // @ts-ignore
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${`this.props.currentPage`}&count=${`this.props.pagesSize`}`)
            .then((response: any) => {
                // @ts-ignore
                this.props.toggleIsFetching(false)
                // @ts-ignore
                this.props.setUsers(response.data.items)
            });
    }

    onPageChanged = (pageNumber:number) => {
        // @ts-ignore
        this.props.setCurrentPage(pageNumber)
        // @ts-ignore
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${`this.props.pagesSize`}`)
            .then((response: any) => {
                // @ts-ignore
                this.props.toggleIsFetching(false)
                // @ts-ignore
                this.props.setUsers(response.data.items)
            });
    }


    render() {

        return <div>

            {// @ts-ignore
                this.props.isFetching ? <Loader/> : null
            }
                    <Users
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
                </div>



    }
}

let mapStateToProps = (state:any) => {
    return{
        users: state.usersPage.users,
        pagesSize: state.usersPage.pagesSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
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
        },
        toggleIsFetching: (isFetching: boolean) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);