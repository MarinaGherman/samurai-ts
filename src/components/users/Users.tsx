import React from 'react';
import {UsersType} from "../../redux/usersReducer";
import Paginator from "./Paginator";
import User from "./User";


type PropsTypes = {
    onPageChanged: (pageNumber: number) => any
    users:UsersType
    totalUsersCount:number
    pageSize:number
    currentPage: number
    follow:(userId:number) => void
    unfollow:(userId:number) => void
    followingInProgress:any

}
let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users,follow,followingInProgress,unfollow }:PropsTypes) => {
    return <div>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                   totalItemsCount={totalUsersCount} pageSize={pageSize}/>

            {    // @ts-ignore
                users.map(u => <User user={u}
                                     followingInProgress={followingInProgress}
                                     key={u.id}
                                     unfollow={unfollow}
                                     follow={follow}
                />)
            }
        </div>
};

export default Users;