import { combineReducers } from "redux";
import workersReducer from "./workersReducer";
import startupReducer from "./startupReducer";
import categoryReducer from "./categoryReducer";


const rootReducer = combineReducers({
  category: categoryReducer,
  workers: workersReducer,
  posts: startupReducer,

  // startup: startupReducer,
})

export default rootReducer
