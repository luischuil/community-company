export const GET_COMMENTS_REQUEST = "GET_COMMENTS_REQUEST"
export const GET_COMMENTS_SUCCESS = "GET_COMMENTS_SUCCESS"
export const GET_COMMENTS_ERROR = "GET_COMMENTS_ERROR"

export const POST_COMMENT_REQUEST = "POST_COMMENT_REQUEST"
export const POST_COMMENT_SUCCESS = "POST_COMMENT_SUCCESS"
export const POST_COMMENT_ERROR = "POST_COMMENT_ERROR"

export const DELETE_SINGLE_COMMENT_REQUEST = "DELETE_SINGLE_COMMENT_REQUEST"
export const DELETE_SINGLE_COMMENT_SUCCESS = "DELETE_SINGLE_COMMENT_SUCCESS"
export const DELETE_SINGLE_COMMENT_ERROR = "DELETE_SINGLE_COMMENT_ERROR"

export const getComments = (postId) => ({
    type: GET_COMMENTS_REQUEST,
    payload: postId
})

export const postComment = (data) => ({
    type: POST_COMMENT_REQUEST,
    payload: data
})

export const deleteSingleComment = (postId) => ({
    type: DELETE_SINGLE_COMMENT_REQUEST,
    payload: postId
})