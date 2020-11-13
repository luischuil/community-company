export const GET_AUTH_USER_REQUEST = "GET_AUTH_USER_REQUEST"
export const GET_AUTH_USER_SUCCESS = "GET_AUTH_USER_SUCCESS"
export const GET_AUTH_USER_ERROR = "GET_AUTH_USER_ERROR"

export const UPDATE_USER_PROFILE_REQUEST = "UPDATE_USER_PROFILE_REQUEST"
export const UPDATE_USER__PROFILE_SUCCESS = "UPDATE_USER__PROFILE_SUCCESS"
export const UPDATE_USER_PROFILE_ERROR = "UPDATE_USER_PROFILE_ERROR"

export const LOGOUT_USER = 'LOGOUT_USER'

export const getAuthUser = (userId) => ({
    type: GET_AUTH_USER_REQUEST,
    payload: userId
})

export const updateUserProfile = (data) => ({
    type: UPDATE_USER_PROFILE_REQUEST,
    payload: data
})

export const logoutUser = () => ({
    type: LOGOUT_USER
})