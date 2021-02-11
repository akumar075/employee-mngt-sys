import { call, put, takeLatest, all } from "redux-saga/effects";
import * as helpers from "./helpers";

export default function* saga() {
  try {
    yield all([takeLatest("getToken", getToken)]);
  } catch (error) {
    console.log(error);
    return;
  }
}
function* getToken(action) {
  try {
    const loginData = yield call(helpers.getToken, action.payload);
    yield put({
      type: "updateUserDetails",
      payload: action.payload,
    });
    sessionStorage.setItem("AuthToken", JSON.stringify(loginData));
  } catch (e) {
    console.log(e.error);
  }
}
