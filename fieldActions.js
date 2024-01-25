// actions/fieldActions.js
import { ADD_FIELD } from "./types";

export const addField = (fieldData) => (dispatch) => {
  dispatch({
    type: ADD_FIELD,
    payload: fieldData,
  });
};
