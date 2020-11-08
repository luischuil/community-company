const initialState = {
    id: null,
    name: null,
    avatar: null
}

export const authUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'AUTH_USER_REQUEST':
            return {
                ...state
            }
        case 'AUTH_USER_SUCCESS':
            return {
                ...state
            }
        case 'AUTH_USER_FAILURE':
            return {
                ...state
            }
        default:
            return state
    }
}