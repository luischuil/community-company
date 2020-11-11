import {
    GET_POSTS_REQUEST,
    GET_POSTS_SUCCESS,
    GET_POSTS_ERROR,

    GET_POST_DETAIL_REQUEST,
    GET_POST_DETAIL_SUCCESS,
    GET_POST_DETAIL_ERROR,
} from '../actions/postActions'

const initialState = {
    list: [],
    detail: {}
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
        case GET_POST_DETAIL_REQUEST:
            return {
                ...state
            }
        case GET_POST_DETAIL_SUCCESS:
            return {
                ...state,
                detail: action.payload
            }
        case GET_POST_DETAIL_ERROR:
            return {
                ...state
            }
        default:
            return state
    }
}