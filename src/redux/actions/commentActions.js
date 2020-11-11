export const GET_COMMENTS_REQUEST = "GET_COMMENTS_REQUEST"
export const GET_COMMENTS_SUCCESS = "GET_COMMENTS_SUCCESS"
export const GET_COMMENTS_ERROR = "GET_COMMENTS_ERROR"

export const getComments = (postId) => ({
    type: GET_COMMENTS_REQUEST,
    payload: postId
})

