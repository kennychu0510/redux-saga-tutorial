import { all, put, takeEvery, call } from 'redux-saga/effects'

export const delay = (ms) => new Promise(res => setTimeout(res, ms))

export function* helloSaga() {
  console.log('Hello Sagas!');
}

export function* incrementAsync() {
  yield call(delay, 1000)
  yield put({ type: "INCREMENT" });
}

// const gen = incrementAsync()
// let next = gen.next()
// console.log(next.value.payload.fn)
// console.log(next.value.type)
// console.log(call(delay, 1000))

export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

export default function* rootSaga(){
  yield all([
    helloSaga(),
    watchIncrementAsync()
  ])
}
