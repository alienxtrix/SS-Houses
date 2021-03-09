import { all } from "redux-saga/effects";
import authSagas from "../src/redux/auth/sagas/index";
export default function* rootSaga(params) {
  yield all([authSagas]);
}
