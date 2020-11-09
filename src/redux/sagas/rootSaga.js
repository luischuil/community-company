import { fork } from 'redux-saga/effects'
import { getAuthUserWatcher } from './authUserSaga'

export function* rootSaga() {
    yield fork(getAuthUserWatcher)
}