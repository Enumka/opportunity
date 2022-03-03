import { combineReducers } from "redux";
import { roleReducer } from "./roleReducer";
import { userReducer } from "./userReducer";
import workersReducer from "./workersReducer";
import startupReducer from "./startupReducer";
import oneStartupReducer from "./oneStartupReducer";
import categoryReducer from "./categoryReducer";
import oneWorkerReducer from "./oneWorkerReducer";
import pagesReducer from "./pagesReducer";
import currentPageReducer from "./currentPageReducer";

const rootReducer = combineReducers({
  category: categoryReducer,
  worker: oneWorkerReducer,
  workers: workersReducer,
  post: oneStartupReducer,
  posts: startupReducer,
  user: userReducer,
  roles: roleReducer,
  page: pagesReducer,
  currentPage: currentPageReducer,
})

export default rootReducer
