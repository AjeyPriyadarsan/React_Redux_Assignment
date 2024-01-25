// reducers/fieldReducer.js
import { ADD_FIELD } from "../actions/types";

const initialState = [];

const fieldReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FIELD:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default fieldReducer;
