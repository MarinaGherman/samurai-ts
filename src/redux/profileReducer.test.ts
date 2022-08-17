import profileReducer, {addPostActionCreator, deletePost, InitialStateType} from "./profileReducer";

let state: InitialStateType  = {
    posts: [
        {id:1, message: "Hi, how are you?", likeCount: 12},
        {id:23, message: "It's my first post", likeCount: 132}
    ],
    profile: undefined,
    status: "",
    newPostText: '',
}

test('length should increment' , () => {
    //test-data
    let action: any = addPostActionCreator('new-action')
    //action
    let newState = profileReducer(state, action)

    //expectation
    expect (newState.posts.length).toBe(3)

})

test('message of new post should be correct' , () => {
    //test-data
    let action: any = addPostActionCreator('new-action')
    //action
    let newState = profileReducer(state, action)

    //expectation
    expect (newState.posts[2].message).toBe('new-action')
})

test('length after delete should be decrement' , () => {
    //test-data
    let action: any = deletePost(1)
    //action
    let newState = profileReducer(state, action)

    //expectation
    expect (newState.posts.length).toBe(1)
})

