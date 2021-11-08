import React from 'react';
import styles from './users.module.css'
import  axios from "axios";
import userPhoto from '../../assets/images/avatar.png'



const Users = (props: any) => {
    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then((response: any) => {
                props.setUsers(response.data.items)
            });
    }
    return (
        <>
            {
                props.users.map((m: any) => <div key={m.id}>
                    <span>
                        <div className={styles.users}>
                            <img className={styles.usersPhoto}
                                 src={m.photos.small != null ? m.photos.small : userPhoto }
                                 alt=""/>
                        </div>
                        <div>
                            {m.followed
                                ? <button onClick={() => {
                                    props.unfollow(m.id)
                                }}>UnFollow</button>
                                : <button onClick={() => {
                                    props.follow(m.id)
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
        </>
    );
};

export default Users;