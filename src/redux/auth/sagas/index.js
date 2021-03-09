import { all, fork, takeLatest } from "redux-saga/effects";
import registerUserSaga from "./register";
import { REGISTER_USER } from "../../../constants/actionsTypes";

export function* watchRegister() {
  yield takeLatest(REGISTER_USER, registerUserSaga);
}
export default function* rootSaga() {
  yield all([fork(watchRegister)]);
}
