import React from "react";
import Post from "../components/Profile/MyPosts/Post/Post";




export const PostStories = (props:any) => <Post message={'hello world'} likesCount={1}  />


export default {
    title: "Post Component",
    component: Post
}