import React from 'react';
import styles from './users.module.css'
import axios from "axios";
import userPhoto from '../../assets/images/avatar.png'


class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${`this.props.currentPage`}&count=${`this.props.pagesSize`}`)
            .then((response: any) => {
                // @ts-ignore
                this.props.setUsers(response.data.items)
            });
    }

    onPageChanged = (pageNumber:number) => {
        // @ts-ignore
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${`this.props.pagesSize`}`)
            .then((response: any) => {
                // @ts-ignore
                this.props.setUsers(response.data.items)
            });
    }


    render() {
        // @ts-ignore
        let pagesCount:number = Math.ceil(this.props.totalUsersCount / this.props.pagesSize);

        let pages:any = [];
        for(let i=1; i <= pagesCount; i++) {
            pages.push(i)
        }


        return <div>
            <div>
                {
                    pages.map((m:number) => {
                        // @ts-ignore
                        return <span  onClick={() => this.onPageChanged(m)} className={this.props.currentPage === m && styles.selectedPage}>{m}</span>
                    })
                }
            </div>

            {
                // @ts-ignore
                this.props.users.map((m: any) => <div key={m.id}>
                    <span>
                        <div className={styles.users}>
                            <img className={styles.usersPhoto}
                                 src={m.photos.small != null ? m.photos.small : userPhoto}
                                 alt=""/>
                        </div>
                        <div>
                            {m.followed
                                ? <button onClick={() => {
                                    // @ts-ignore
                                    this.props.unfollow(m.id)
                                }}>UnFollow</button>
                                : <button onClick={() => {
                                    // @ts-ignore
                                    this.props.follow(m.id)
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
    }
}


export default Users;