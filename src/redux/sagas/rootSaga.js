import { all } from 'redux-saga/effects';
import searchWatcher from './searchSaga';

export default function* rootSaga() {
  console.log('Saga is working');
  yield all([searchWatcher()]);
}
