import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { initState } from "./initState";
import { rootReducer } from "./reducers/rootReducer";


export const store = createStore(rootReducer, initState(), composeWithDevTools(applyMiddleware(thunk)))
