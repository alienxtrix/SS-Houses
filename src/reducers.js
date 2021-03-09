import { combineReducers } from "redux";
import authUser from "./redux/auth/reducers";
const appReducers = combineReducers({ authUser });
const rootReducer = (state, action) => {
  if (action.type === "STATE_RESET") {
    state = undefined;
  }
  return appReducers(state, action);
};

export default rootReducer;
