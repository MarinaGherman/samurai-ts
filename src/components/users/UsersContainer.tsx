import React from 'react';
import { connect } from 'react-redux';
import Users from "./Users";
import Loader from "../common/Loader";
import {
    follow,
    setCurrentPage,
    unfollow,
    toggleFollowingProgress,
    getUsers, UsersType, UserType
} from "../../redux/usersReducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type PropsType = {
    users:UsersType
    totalUsersCount:number
    pagesSize:number
    currentPage:number
    follow:(userId:number) => void
    unfollow:(userId:number) => void
    followingInProgress:Array<UserType>
    getUsers: (pageNumber:number,pageSize:number) => void
    isFetching: boolean
    pageSize: number
}

class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage,this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber,this.props.pageSize)
    }
    render() {
        return <div>
            {
                this.props.isFetching ? <Loader/> : null
            }
                    <Users
                        users={this.props.users}
                        totalUsersCount={this.props.totalUsersCount}
                        pagesSize={this.props.pagesSize}
                        currentPage={this.props.currentPage}
                        onPageChanged={this.onPageChanged}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}
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
