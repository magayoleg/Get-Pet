import {
  call, delay, put, takeLatest,
} from 'redux-saga/effects';
import { GET_ADS, SEARCH_AD } from '../types/adsTypes';

const searchFetch = async (str) => {
  const response = await fetch(`/search/${str}`); // как на беке?
  return response.json();
};

function* searchWorker(action) {
  try {
    yield delay(2000);
    const ads = yield call(searchFetch, action.payload);
    yield put({ type: GET_ADS, payload: ads });
  } catch (error) {
    console.error(error); // переписать?
  }
}

function* searchWatcher() {
  yield takeLatest(SEARCH_AD, searchWorker);
}

export default searchWatcher;
