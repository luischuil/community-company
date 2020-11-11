export const GET_AUTH_USER_REQUEST = "GET_AUTH_USER_REQUEST"
export const GET_AUTH_USER_SUCCESS = "GET_AUTH_USER_SUCCESS"
export const GET_AUTH_USER_ERROR = "GET_AUTH_USER_ERROR"

export const LOGOUT_USER = 'LOGOUT_USER'

export const getAuthUser = (userId) => ({
    type: GET_AUTH_USER_REQUEST,
    payload: userId
})

export const logoutUser = () => ({
    type: LOGOUT_USER
})