import React from 'react';
import styles from "./users.module.css";
import userPhoto from "../../assets/images/avatar.png";
import {NavLink} from 'react-router-dom';
import axios from "axios";
import {usersApi} from "../../api/api";

const Users = (props: any) => {

    // @ts-ignore
    let pagesCount: number = Math.ceil(props.totalUsersCount / props.pagesSize);

    let pages: any = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {
                    pages.map((m: number) => {
                        // @ts-ignore
                        return <span
                            onClick={(e: any) => props.onPageChanged(m)}
                            // @ts-ignore
                            className={props.currentPage === m && styles.selectedPage}>
                            {m}
                        </span>
                    })
                }
            </div>

            {
                // @ts-ignore
                props.users.map((m: any) => <div key={m.id}>
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
                                ? <button onClick={() => {
                                    usersApi.deleteFollowers(m.id)
                                        .then((data:any) => {
                                            if(data.resultCode === 0) {
                                                props.unfollow(m.id)
                                            }})

                                    // @ts-ignore
                                    // axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${m.id}`, {}, {
                                    //     withCredentials: true,
                                    //     headers: {
                                    //         'API-KEY': 'd4df065f-fd45-48fe-adda-b1fec39821b3'
                                    //     }
                                    // })
                                    //     .then((response: any) => {
                                    //         if(response.data.resultCode === 0) {
                                    //             props.unfollow(m.id)
                                    //         }
                                    //     });
                                    // @ts-ignore

                                }}>UnFollow</button>
                                : <button onClick={() => {

                                    usersApi.getFollower(m.id)
                                        .then((data:any) => {
                                            if(data.resultCode === 0) {
                                                props.follow(m.id)
                                            }})

                                }}>Follow</button>
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