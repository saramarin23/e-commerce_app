import { combineReducers } from "redux";
//When we import the user

import userReducer from "./user/user.reducer";

export default combineReducers({
  user: userReducer
});
