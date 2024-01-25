// reducers/index.js
import { combineReducers } from "redux";
import fieldReducer from "./fieldReducer";

const rootReducer = combineReducers({
  fields: fieldReducer,
  // Add more reducers if needed
});

export default rootReducer;
