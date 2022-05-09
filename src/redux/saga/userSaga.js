import {call, put, takeEvery} from "redux-saga/effects";

import {ASYNC_SET_USERS, setUsers} from "../reducers";

const fetchUsersFromApi = () => fetch('https://jsonplaceholder.typicode.com/users?_limit=10')

function* fetchUserWorker() {
    const data = yield  call(fetchUsersFromApi)
    const users = yield call(() => new Promise(res => res(data.json())))
    yield put(setUsers((users)))
}

export function* userWatcher() {
    yield takeEvery(ASYNC_SET_USERS, fetchUserWorker)
}