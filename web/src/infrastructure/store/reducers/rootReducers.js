/**
 * This module defines a root reducer for the Redux store by combining
 * all the individual reducers used in the application.
 */

import { combineReducers } from 'redux';
import fileDataReducer from './fileDataReducer';

/**
 * The rootReducer is a combined reducer that merges all the individual
 * reducers in the application into a single reducer function.
 */
const rootReducer = combineReducers({
  fileData: fileDataReducer,
});

export default rootReducer;
