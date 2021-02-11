import { call, put, takeLatest, all } from "redux-saga/effects";
import * as helpers from "./helpers";

export default function* saga() {
  try {
    yield all([takeLatest("serverSearch", fetchEmpBySearchString)]);
  } catch (error) {
    console.log(error);
    return;
  }
}
function* fetchEmpBySearchString(action) {
  try {
    const empData = yield call(helpers.getEmpData, action.payload);
    yield put({
      type: "updateEmpData",
      payload: empData,
    });
  } catch (e) {
    console.log(e);
  }
}
