import { takeLatest, call, put } from 'redux-saga/effects'
import { message } from 'antd'
import { getAuthUser, editUserProfile } from '../../utils/api/authUserServices'
import {
    GET_AUTH_USER_REQUEST,
    GET_AUTH_USER_SUCCESS,
    GET_AUTH_USER_ERROR,

    UPDATE_USER_PROFILE_REQUEST,
    UPDATE_USER__PROFILE_SUCCESS,
    UPDATE_USER_PROFILE_ERROR,

} from '../actions/authUserActions'


export function* getAuthUserWatcher() {
    yield takeLatest(GET_AUTH_USER_REQUEST, getAuthUserFlow)
}

export function* getAuthUserFlow(action) {
    try {
        const user = yield call(getAuthUser, action.payload)
        yield put({ type: GET_AUTH_USER_SUCCESS, payload: user })
    } catch (e) {
        yield put({ type: GET_AUTH_USER_ERROR, payload: e })
    }
}

export function* editUserProfileWatcher() {
    yield takeLatest(UPDATE_USER_PROFILE_REQUEST, editUserProfileFlow)
}

export function* editUserProfileFlow(action) {
    const { userId, name, email } = action.payload

    const userInfo = {
        name,
        email
    }

    try {
        yield call(editUserProfile, userId, userInfo)
        yield put({ type: UPDATE_USER__PROFILE_SUCCESS, payload: userInfo })
        message.info('Ŕegistro guardado con éxito!!')
    } catch (e) {
        yield put({ type: UPDATE_USER_PROFILE_ERROR, payload: e })
    }
}