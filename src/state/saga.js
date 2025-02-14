import { takeLeading, put, call } from 'redux-saga/effects';
import { fetchUsersApi } from './api';

function* fetchUsersSaga() { // Worker Saga
    try {
        const users = yield call(fetchUsersApi);
        yield put({ type: 'FETCH_USERS_SUCCESS', payload: users });
    } catch(error) {
        yield put({ type: 'FETCH_USERS_FAILURE', payload: error.message });
    }
}

export function* watchUserSaga() { // Watcher Saga
    yield takeLeading('FETCH_USERS_REQUEST', fetchUsersSaga);
}