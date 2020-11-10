import { takeLatest, call, put } from 'redux-saga/effects'
import {
    GET_POSTS_REQUEST,
    GET_POSTS_SUCCESS,
    GET_POSTS_ERROR
} from '../actions/postActions'
import { getPosts } from '../../utils/api/postServices'

export function* getPostsWatcher() {
    yield takeLatest(GET_POSTS_REQUEST, getPostsFlow)
}

export function* getPostsFlow(action) {
    try {
        const posts = yield call(getPosts, action.payload)
        yield put({ type: GET_POSTS_SUCCESS, payload: posts })
    } catch (e) {
        yield put({ type: GET_POSTS_ERROR, payload: e })
    }
}
