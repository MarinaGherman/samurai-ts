// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import { connect } from 'react-redux';
import Users from "./Users";
import Loader from "../common/Loader";
import {follow, setCurrentPage, setUsers, toggleIsFetching, unfollow} from "../../redux/usersReducer";
import {getUsers} from "../../api/api";


class UsersContainer extends React.Component {
    componentDidMount() {
        // @ts-ignore
        this.props.toggleIsFetching(true)
        // @ts-ignore
        getUsers(this.props.currentPage, this.props.pageSize)
            .then((data: any) => {
                // @ts-ignore
                this.props.toggleIsFetching(false)
                // @ts-ignore
                this.props.setUsers(data.items)
            });
    }

    onPageChanged = (pageNumber:number) => {
        // @ts-ignore
        this.props.setCurrentPage(pageNumber)
        // @ts-ignore
        this.props.toggleIsFetching(true)
        // @ts-ignore
        getUsers(pageNumber, this.props.pageSize)
            .then((data: any) => {
                // @ts-ignore
                this.props.toggleIsFetching(false)
                // @ts-ignore
                this.props.setUsers(data.items)
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

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    toggleIsFetching
})(UsersContainer);