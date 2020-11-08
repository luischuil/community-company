import { all, fork } from 'redux-saga/effects'
import * as authUserSagas from './authUserSaga'

export function* rootSaga() {
    yield all([
        ...Object.values(authUserSagas),
    ]).map(fork)
}