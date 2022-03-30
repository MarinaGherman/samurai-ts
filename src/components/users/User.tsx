import React from 'react';
import styles from "./users.module.css";
import {NavLink} from "react-router-dom";
import userPhoto from "../../assets/images/avatar.png";
import {UserType} from "../../redux/usersReducer";

type PropsType = {
    user: UserType
    follow:(id:number) => void
    unfollow:(id:number) => void
    followingInProgress:Array<UserType>
}

const User = ({user,followingInProgress,unfollow,follow}:PropsType) => {
    return (
        <div>
            <span>
                        <div className={styles.users}>
                            <NavLink to={'/profile/' + user.id}>
                                <img className={styles.usersPhoto}
                                     src={user.photos.small != null ? user.photos.small : userPhoto}
                                     alt=""/>
                            </NavLink>
                        </div>
                        <div>
                            {user.followed
                                ? <button disabled={followingInProgress.some((id) => id === user.id)}
                                          onClick={() => {unfollow(user.id)}}>UnFollow</button>
                                : <button  disabled={followingInProgress.some((id ) => id === user.id)}
                                           onClick={() => {follow(user.id)}}>Follow</button>
                            }

                        </div>
                    </span>
            <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{'user.location.country'}</div>
                            <div>{'user.location.city'}</div>
                        </span>
                    </span>
        </div>
    );
};

export default User;