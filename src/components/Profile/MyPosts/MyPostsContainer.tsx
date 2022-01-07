import MyPosts from "./MyPosts";
import {addPostActionCreator} from "../../../redux/profileReducer";
import {connect} from "react-redux";

let mapStateToProps = (state:any) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch:any) => {
    return {
        addPost: (newPostText:string) => {
            dispatch(addPostActionCreator(newPostText));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);
export default MyPostsContainer;
