import { call } from "redux-saga/effects";
import { registerUserSuccess, registerUserFailure } from "../../../actions";
import axios from "axios";

export default function* ({ payload }) {
  try {
    const headerParams = {
      "Content-Type": `application/json`,
    };
    const body = {
      "email": "admin60@g.com",
      "first_name": "julio",
      "last_name": "aa",
      "password": "123",
      "password_confirmation": "123",
      "phone_number": "213465",
      "username": "linux"
      };
    console.log("payload with sagas1: ", JSON.stringify(body));
    const response = yield call(
      axios.post,
      "https://inmobiliariatest.herokuapp.com/users/signup/",
      body
    );
    console.log("response: ", response);
  } catch (error) {
    console.log("error: ", error);
  }
}
