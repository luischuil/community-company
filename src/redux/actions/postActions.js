export const GET_POSTS_REQUEST = "GET_POSTS_REQUEST"
export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS"
export const GET_POSTS_ERROR = "GET_POSTS_ERROR"

export const GET_POST_DETAIL_REQUEST = "GET_POST_DETAIL_REQUEST"
export const GET_POST_DETAIL_SUCCESS = "GET_POST_DETAIL_SUCCESS"
export const GET_POST_DETAIL_ERROR = "GET_POST_DETAIL_ERROR"

export const DELETE_POST_REQUEST = "DELETE_POST_REQUEST"
export const DELETE_POST_SUCCESS = "DELETE_POST_SUCCESS"
export const DELETE_POST_ERROR = "DELETE_POST_ERROR"

export const getPosts = () => ({
    type: GET_POSTS_REQUEST
})

export const getPostDetail = (postId) => ({
    type: GET_POST_DETAIL_REQUEST,
    payload: postId
})

export const deletePost = (postId) => ({
    type: DELETE_POST_REQUEST,
    payload: postId
})