import { takeLatest, call, put } from 'redux-saga/effects'
import { getPosts, getPostDetail, deletePost } from '../../utils/api/postServices'
import {
    GET_POSTS_REQUEST,
    GET_POSTS_SUCCESS,
    GET_POSTS_ERROR,

    GET_POST_DETAIL_REQUEST,
    GET_POST_DETAIL_SUCCESS,
    GET_POST_DETAIL_ERROR,

    DELETE_POST_REQUEST,
    DELETE_POST_SUCCESS,
    DELETE_POST_ERROR
} from '../actions/postActions'


export function* getPostsWatcher() {
    yield takeLatest(GET_POSTS_REQUEST, getPostsFlow)
}

export function* getPostsFlow() {
    try {        
        const posts = yield call(getPosts)
        yield put({ type: GET_POSTS_SUCCESS, payload: posts })
    } catch (e) {
        yield put({ type: GET_POSTS_ERROR, payload: e })
    }
}

export function* getPostDetailWatcher() {
    yield takeLatest(GET_POST_DETAIL_REQUEST, getPostDetailFlow)
}

export function* getPostDetailFlow(action) {
    try {
        const post = yield call(getPostDetail, action.payload)
        yield put({ type: GET_POST_DETAIL_SUCCESS, payload: post })
    } catch (e) {
        yield put({ type: GET_POST_DETAIL_ERROR, payload: e })
    }
}

export function* deletePostWatcher() {
    yield takeLatest(DELETE_POST_REQUEST, deletePostFlow)
}

export function* deletePostFlow(action) {
    try {
        const post = yield call(deletePost, action.payload)
        yield put({ type: DELETE_POST_SUCCESS, payload: post })
    } catch (e) {
        yield put({ type: DELETE_POST_ERROR, payload: e })
    }
}

export function* deletePostSuccessWatcher() {
    yield takeLatest(DELETE_POST_SUCCESS, getPostsFlow)
}