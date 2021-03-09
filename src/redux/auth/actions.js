import {
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
} from "../../constants/actionsTypes";

export const registerUSer = (payload) => {
  console.log("payload", payload);
  return {
    type: REGISTER_USER,
    payload,
  };
};
export const registerUSerSuccess = (payload) => {
  return {
    type: REGISTER_USER_SUCCESS,
    payload,
  };
};
export const registerUSerFailure = (payload) => {
  return {
    type: REGISTER_USER_FAILURE,
    payload,
  };
};
