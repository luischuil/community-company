import { fork } from 'redux-saga/effects'
import { getAuthUserWatcher, } from './authUserSaga'
import { 
    getPostsWatcher, 
    getPostDetailWatcher, 
    deletePostWatcher, 
    deletePostSuccessWatcher
} from './postSaga'
import {
    getCommentsWatcher,
    postCommentWatcher,
    postCommentSuccessWatcher,
    deleteSingleCommentWatcher,
    deleteSingleCommentSuccessWatcher,
} from './commentSaga'

export function* rootSaga() {
    yield fork(getAuthUserWatcher)
    yield fork(getPostsWatcher)
    yield fork(getPostDetailWatcher)
    yield fork(deletePostWatcher)
    yield fork(deletePostSuccessWatcher)
    yield fork(getCommentsWatcher)
    yield fork(postCommentWatcher)
    yield fork(postCommentSuccessWatcher)
    yield fork(deleteSingleCommentWatcher)
    yield fork(deleteSingleCommentSuccessWatcher)
}