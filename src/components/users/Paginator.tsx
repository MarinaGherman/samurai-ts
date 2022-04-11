import React from 'react';
import {UserType} from "../../redux/usersReducer";
import styles from "./users.module.css";

type PropsType = {
    totalItemsCount:number
    pageSize:number
    onPageChanged: (pageNumber: number) => void
    currentPage: number
}

const Paginator = ({totalItemsCount,pageSize, currentPage, onPageChanged}:PropsType) => {
    let pagesCount: number = Math.ceil(totalItemsCount / pageSize);
    let pages: any = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
                {pages.map((m: UserType ) => {
                        return <span
                            // @ts-ignore
                            onClick={() => onPageChanged(m)}
                            // @ts-ignore
                            className={currentPage === m && styles.selectedPage}>
                            {m}
                        </span>
                    })
                }
            </div>
};

export default Paginator;
