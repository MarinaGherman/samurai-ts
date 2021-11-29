import React from 'react';
import s from './Post.module.scss';
export type PropsType = {
    message: string
    likesCount: number
}
const Post = (props : PropsType) => {

    return (
        <div className={s.item}>
            <img src='https://www.gossipetv.com/wp-content/uploads/2019/05/avatar-2-quando-esce-trama.jpg' />
            { props.message }
            <div>
                <span>like</span> { props.likesCount }
            </div>
        </div>
    )
}

export default Post;