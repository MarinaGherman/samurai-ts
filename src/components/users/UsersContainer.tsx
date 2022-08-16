import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import Loader from "../common/Loader";

import {
    followTC,
    setCurrentPage,
    unfollowTC,
    getUsersTC
} from "../../redux/usersReducer";

import Paginator from "./Paginator";
import User from "./User";


const UsersContainer =() => {
    const dispatch = useDispatch()
    //@ts-ignore
    const users = useSelector(state => state.usersPage.users)
    //@ts-ignore
    const pageSize = useSelector(state => state.usersPage.pageSize)
    //@ts-ignore
    const totalUsersCount = useSelector(state => state.usersPage.totalCount)
    //@ts-ignore
    const currentPage = useSelector(state => state.usersPage.currentPage)
    //@ts-ignore
    const isFetching = useSelector(state => state.usersPage.isFetching)
    //@ts-ignore
    const followingInProgress = useSelector(state => state.usersPage.following)
    //
    const onPageChanged = (pageNumber:any) => {
        dispatch(setCurrentPage(pageNumber))
    }

    useEffect(() => {

        dispatch(getUsersTC(currentPage, pageSize))

    },[currentPage, pageSize])

        return <>

            {
               isFetching ? <Loader/> : null
            }
            <Paginator currentPage={currentPage}
                       onPageChanged={onPageChanged}
                       totalUsersCount={totalUsersCount}
                       pageSize={pageSize}
                       portionSize={10}/>

            {users.map((u:any) => <User user={u}
                followingInProgress={followingInProgress}
                key={u.id}
                unfollow={() => dispatch(unfollowTC)}
                follow={() => dispatch(followTC)}/>)}

        </>}

    export default UsersContainer;



