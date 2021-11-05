import React from 'react';
import styles from './users.module.css'

const Users = (props:any) => {
    props.setUsers( [  {id:1, followed: false, photoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyM1UJLHjiRFSx7VbTGBUTdsiUJJ9OLYyPEwKW7VfQsTRDLC6BHbsWqdccqFdewpOwBTU&usqp=CAU",
        fullName: "Marina", status: "i am a boss", location: {city: 'Como',country: 'Italy'}},
        {id:2, followed: false, photoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyM1UJLHjiRFSx7VbTGBUTdsiUJJ9OLYyPEwKW7VfQsTRDLC6BHbsWqdccqFdewpOwBTU&usqp=CAU",
            fullName: "Andrei", status: "i am a big boss", location: {city: 'Preganziol',country: 'Italy'}},
        {id:3, followed: true,photoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyM1UJLHjiRFSx7VbTGBUTdsiUJJ9OLYyPEwKW7VfQsTRDLC6BHbsWqdccqFdewpOwBTU&usqp=CAU",
            fullName: "Dmitry", status: "Hello world", location: {city: 'Minsk',country: 'Belorus'}}])
    return (
        <>
            {
                props.users.map((m:any)=> <div key={m.id}>
                    <span>
                        <div className={styles.users}>
                            <img className={styles.usersPhoto}
                                 src={m.photoURL}
                                 alt=""/>
                        </div>
                        <div>
                            {m.followed
                                ? <button onClick={() => {
                                    props.unfollow(m.id)}}>UnFollow</button>
                                : <button onClick={() => {props.follow(m.id)}}>Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{m.fullName}</div>
                            <div>{m.status}</div>
                        </span>
                        <span>
                            <div>{m.location.country}</div>
                            <div>{m.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </>
    );
};

export default Users;