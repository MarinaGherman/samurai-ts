import React from 'react';
import styles from "./users.module.css";
import userPhoto from "../../assets/images/avatar.png";
import {NavLink} from 'react-router-dom';
import {UsersType, UserType} from "../../redux/usersReducer";


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
const Users = (props: PropsTypes) => {
    let pagesCount: number = Math.ceil(props.totalUsersCount / props.pagesSize);
    let pages: any = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {
                    pages.map((m: UserType ) => {
                        return <span
                            // @ts-ignore
                            onClick={() => props.onPageChanged(m)}
                            // @ts-ignore
                            className={props.currentPage === m && styles.selectedPage}>
                            {m}
                        </span>
                    })
                }
            </div>

            {
                // @ts-ignore
                props.users.map((m:UserType) => <div key={m.id}>
                    <span>
                        <div className={styles.users}>
                            <NavLink to={'/profile/' + m.id}>
                                <img className={styles.usersPhoto}
                                     src={m.photos.small != null ? m.photos.small : userPhoto}
                                     alt=""/>
                            </NavLink>
                        </div>
                        <div>
                            {m.followed
                                ? <button disabled={props.followingInProgress.some((id) => id === m.id)}
                                          onClick={() => {props.unfollow(m.id)}}>UnFollow</button>
                                : <button  disabled={props.followingInProgress.some((id) => id === m.id)}
                                           onClick={() => {props.follow(m.id)}}>Follow</button>
                            }

                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{m.name}</div>
                            <div>{m.status}</div>
                        </span>
                        <span>
                            <div>{'m.location.country'}</div>
                            <div>{'m.location.city'}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
};

export default Users;