import {
    GET_POSTS_REQUEST,
    GET_POSTS_SUCCESS,
    GET_POSTS_ERROR,
} from '../actions/postActions'

const initialState = {
    list: []
}

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS_REQUEST:
            return {
                ...state
            }
        case GET_POSTS_SUCCESS:
            return {
                ...state,
                list: action.payload
            }
        case GET_POSTS_ERROR:
            return {
                ...state
            }
        default:
            return state
    }
}