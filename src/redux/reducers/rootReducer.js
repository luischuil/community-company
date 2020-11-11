import { combineReducers } from 'redux'
import { authUserReducer } from './authUserReducer'
import { postReducer } from './postReducer'
import { commentReducer } from './commentReducer'

export const rootReducer = combineReducers({
    authUserReducer,
    postReducer,
    commentReducer,
})