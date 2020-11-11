import {
    GET_COMMENTS_REQUEST,
    GET_COMMENTS_SUCCESS,
    GET_COMMENTS_ERROR,
} from '../actions/commentActions'

const initialState = {
    list: [],
}

export const commentReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COMMENTS_REQUEST:
            return {
                ...state
            }
        case GET_COMMENTS_SUCCESS:
            return {
                ...state,
                list: action.payload
            }
        case GET_COMMENTS_ERROR:
            return {
                ...state
            }
        default:
            return state
    }
}