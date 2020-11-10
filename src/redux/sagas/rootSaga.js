import { fork } from 'redux-saga/effects'
import { getAuthUserWatcher } from './authUserSaga'
import { getPostsWatcher } from './postSaga'

export function* rootSaga() {
    yield fork(getAuthUserWatcher)
    yield fork(getPostsWatcher)
}