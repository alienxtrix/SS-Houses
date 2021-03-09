import {
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
} from "../../constants/actionsTypes";

const INITIAL_STATE = {
  user: null,
  loading: false,
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return { ...state, loading: true };
    case REGISTER_USER_SUCCESS:
      return { ...state, loading: false, user: action.payload };
    case REGISTER_USER_FAILURE:
      return { ...state, loading: false, error: true };

    default:
      return { ...state };
  }
};
