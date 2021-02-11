import { all } from "redux-saga/effects";
import serverSearchSaga from "../searchComp/data/saga";
import loginSaga from "../login/data/saga";

export default function* saga() {
  try {
    yield all([serverSearchSaga(), loginSaga()]);
  } catch (error) {
    console.log(error);
    return;
  }
}
