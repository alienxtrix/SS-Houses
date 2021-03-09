import { call } from "redux-saga/effects";
import { registerUserSuccess, registerUserFailure } from "../../../actions";
import axios from "axios";

export default function* (payload) {
  try {
    console.log("payload with sagas: ", payload);
    const response = yield call(
      axios.post,
      "https://inmobiliariatest.herokuapp.com/users/signup/",
      payload
    );
    console.log("response: ", response);
  } catch (error) {
    console.log("error: ", error);
  }
}
