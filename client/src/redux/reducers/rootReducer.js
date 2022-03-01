import { combineReducers } from "redux";
import { roleReducer } from "./roleReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  roles: roleReducer
})
