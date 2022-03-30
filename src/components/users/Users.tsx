import React from 'react';
import {UsersType, UserType} from "../../redux/usersReducer";
import Paginator from "./Paginator";
import User from "./User";


type PropsTypes = {
    onPageChanged: (pageNumber: number) => any
    users:UsersType
    totalUsersCount:number
    pagesSize:number
    currentPage: number
    follow:(userId:number) => void
    unfollow:(userId:number) => void
    followingInProgress:Array<UserType>

}
const Users = ({users,onPageChanged,pagesSize,currentPage,follow,unfollow, followingInProgress}: PropsTypes) => {

    return (
        <div>
            <Paginator totalUsersCount={currentPage} pagesSize={pagesSize} onPageChanged={onPageChanged} currentPage={currentPage}/>
            {// @ts-ignore
                users.map((m:UserType) => <User followingInProgress={followingInProgress} follow={follow} unfollow={unfollow} user={m} key={m.id}/>)
            }
        </div>
    );
};

export default Users;