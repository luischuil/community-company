import { fork } from 'redux-saga/effects'
import { getAuthUserWatcher } from './authUserSaga'
import { getPostsWatcher, getPostDetailWatcher } from './postSaga'
import { getCommentsWatcher } from './commentSaga'

export function* rootSaga() {
    yield fork(getAuthUserWatcher)
    yield fork(getPostsWatcher)
    yield fork(getPostDetailWatcher)
    yield fork(getCommentsWatcher)
}