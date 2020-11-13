import {
    GET_AUTH_USER_REQUEST,
    GET_AUTH_USER_SUCCESS,
    GET_AUTH_USER_ERROR,

    UPDATE_USER_PROFILE_REQUEST,
    UPDATE_USER__PROFILE_SUCCESS,
    UPDATE_USER_PROFILE_ERROR,

    LOGOUT_USER,
} from '../actions/authUserActions'

const initialState = {
    id: null,
    name: null,
    avatar: null,
    email: null,
    isAuthenticated: false,
}

export const authUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_AUTH_USER_REQUEST:
            return {
                ...state
            }
        case GET_AUTH_USER_SUCCESS:
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true
            }
        case GET_AUTH_USER_ERROR:
            return {
                ...state
            }

        case UPDATE_USER_PROFILE_REQUEST:
            return {
                ...state
            }
        case UPDATE_USER__PROFILE_SUCCESS:            
            return {
                ...state,
                ...action.payload
            }
        case UPDATE_USER_PROFILE_ERROR:
            return {
                ...state
            }

        case LOGOUT_USER:
            return {
                ...initialState
            }
        default:
            return state
    }
}