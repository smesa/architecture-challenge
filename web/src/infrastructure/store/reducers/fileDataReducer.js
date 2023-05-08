/**
 * This module defines a Redux reducer for handling file data actions.
 */

import { FETCH_FILES_DATA } from "../actions/fileDataActions";

const initialState = [];

/**
 * A reducer function for managing the file data state in the Redux store.
 *
 * @param {Array} state - The current file data state.
 * @param {Object} action - The Redux action to process.
 * @returns {Array} The new state after processing the action.
 */
const fileDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FILES_DATA:
      return action.payload;
    default:
      return state;
  }
};

export default fileDataReducer;
