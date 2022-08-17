import React from 'react';
import styles from "./users.module.css";
import {NavLink} from "react-router-dom";
import userPhoto from "../../assets/images/avatar.png";
import { UserType} from "../../redux/usersReducer";

type UserPropsType = {
    user: UserType
    onFollow:(userId:number) => void
    onUnfollow:(userId:number) => void
    followingInProgress:Array<UserType>
}

const User = ({user,followingInProgress,onUnfollow,onFollow}:UserPropsType) => {
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

                {user.followed ?
                    <button disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => onUnfollow(user.id)}>Unfollow</button>

                    : <button disabled={followingInProgress.some(id => id === user.id)}
                              onClick={() => onFollow(user.id)}>Follow</button>
                }

            </span>

            <span>
                <div>{user.name}</div>
                <div>{user.status}</div>
            </span>
            <span>
                <div>{'user.location.country'}</div>
                <div>{'user.location.city'}</div>
            </span>

        </div>
    );
};

export default User;