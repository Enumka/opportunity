import { combineReducers } from "redux";
import { roleReducer } from "./roleReducer";
import { userReducer } from "./userReducer";
import workersReducer from "./workersReducer";
import startupReducer from "./startupReducer";
import oneStartupReducer from "./oneStartupReducer";
import categoryReducer from "./categoryReducer";
import oneWorkerReducer from "./oneWorkerReducer";


const rootReducer = combineReducers({
  category: categoryReducer,
  worker: oneWorkerReducer,
  workers: workersReducer,
  post: oneStartupReducer,
  posts: startupReducer,
  user: userReducer,
  roles: roleReducer
})

export default rootReducer
