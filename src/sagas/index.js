import { takeLatest, call, put } from "redux-saga/effects";
import store from "react-native-simple-store"; // library for working with local storage

// action types
import {
  LOCAL_DATA_REQUEST,
  LOCAL_DATA_SUCCESS,
  LOCAL_DATA_FAILURE
} from "../actions/types";

// watch for actions dispatched to the store
export function* watcherSaga() {
  yield takeLatest(LOCAL_DATA_REQUEST, workerSaga);
}

// function for getting the data from local storage
function getLocalData() {
  return store.get("app_state"); // fetch the data from local storage that is stored in the "app_state" key
}

function* workerSaga() {
  try {
    const response = yield call(getLocalData); // trigger the fetching of data from local storage
    const cards = response.cards;

    yield put({ type: LOCAL_DATA_SUCCESS, cards }); // dispatch the success action (data has been fetched)
  } catch (error) {
    yield put({ type: LOCAL_DATA_FAILURE, error }); // dispatch the fail action (data was not fetched)
  }
}
