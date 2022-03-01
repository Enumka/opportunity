import { combineReducers } from "redux";
import workersReducer from "./workersReducer";
import startupReducer from "./startupReducer";
import oneStartupReducer from "./oneStartupReducer";


const rootReducer = combineReducers({
  workers: workersReducer,
  worker: workersReducer,
  startups: startupReducer,
  category: startupReducer,
  startup: oneStartupReducer

  })

export default rootReducer
