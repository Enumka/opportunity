import { combineReducers } from "redux";
import workersReducer from "./workersReducer";
import startupReducer from "./startupReducer";


const rootReducer = combineReducers({
  workers: workersReducer,
  startup: startupReducer,
  category: startupReducer,

  })

export default rootReducer
