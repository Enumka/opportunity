import { combineReducers } from "redux";
import workersReducer from "./workersReducer";


const rootReducer = combineReducers({
   workers: workersReducer
  })

export default rootReducer
