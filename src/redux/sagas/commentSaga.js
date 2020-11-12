import { takeLatest, call, put } from 'redux-saga/effects'
import { getComments, postComment } from '../../utils/api/commentServices'
import {
    GET_COMMENTS_REQUEST,
    GET_COMMENTS_SUCCESS,
    GET_COMMENTS_ERROR,

    POST_COMMENT_REQUEST,
    POST_COMMENT_SUCCESS,
    POST_COMMENT_ERROR,
} from '../actions/commentActions'


export function* getCommentsWatcher() {
    yield takeLatest(GET_COMMENTS_REQUEST, getCommentsFlow)
}

export function* getCommentsFlow(action) {
    try {
        const comments = yield call(getComments, action.payload)
        yield put({ type: GET_COMMENTS_SUCCESS, payload: comments })
    } catch (e) {
        yield put({ type: GET_COMMENTS_ERROR, payload: e })
    }
}

export function* postCommentWatcher() {
    yield takeLatest(POST_COMMENT_REQUEST, postCommentFlow)
}

export function* postCommentFlow(action) {
    try {
        yield call(postComment, action.payload)
        yield put({ type: POST_COMMENT_SUCCESS, payload: action.payload.postId})
    } catch (e) {
        yield put({ type: POST_COMMENT_ERROR, payload: e })
    }
}

export function* postCommentSuccessWatcher() {
    yield takeLatest(POST_COMMENT_SUCCESS, getCommentsFlow)
}
