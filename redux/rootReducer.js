import { combineReducers } from "redux";
import { userReducers } from "./reducers/userReducer";

const rootReducer = combineReducers({
  user: userReducers,
});

export default rootReducer;
