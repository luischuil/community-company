import { takeLatest, call, put } from 'redux-saga/effects'
import { getComments } from '../../utils/api/commentServices'
import {
    GET_COMMENTS_REQUEST,
    GET_COMMENTS_SUCCESS,
    GET_COMMENTS_ERROR,
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