import { combineReducers } from "redux";
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
  // startup: startupReducer,
})

export default rootReducer
