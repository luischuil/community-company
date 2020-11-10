import { combineReducers } from 'redux'
import { authUserReducer } from './authUserReducer'
import { postReducer } from './postReducer'

export const rootReducer = combineReducers({
    authUserReducer,
    postReducer,
})