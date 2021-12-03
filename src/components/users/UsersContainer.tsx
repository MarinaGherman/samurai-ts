import React from 'react';
import { connect } from 'react-redux';
import Users from "./Users";
import Loader from "../common/Loader";

import {
    follow,
    setCurrentPage,
    unfollow,
    toggleFollowingProgress,
    getUsers
} from "../../redux/usersReducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {AppStateType} from "../../redux/redux-store";



class UsersContainer extends React.Component {
    componentDidMount() {
       // @ts-ignore
        this.props.getUsers(this.props.currentPage,this.props.pageSize)
    }

    onPageChanged = (pageNumber:number) => {
        // @ts-ignore
        this.props.getUsers(pageNumber,this.props.pageSize)
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
                        // @ts-ignore
                        totalUserCount={this.props.totalUserCount}
                        // @ts-ignore
                        followingInProgress={this.props.followingInProgress}
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
        isFetching: state.usersPage.isFetching,
        totalUserCount:state.usersPage.totalUserCount,
        followingInProgress: state.usersPage.followingInProgress,
        isAuth: state.auth.isAuth
    }
}


export default compose<React.ComponentType>(connect(mapStateToProps, {
        unfollow,
        follow,
        setCurrentPage,
        toggleFollowingProgress,
        getUsers
    }),
    withAuthRedirect)(UsersContainer)
