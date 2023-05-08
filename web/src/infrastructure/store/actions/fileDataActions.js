/**
 * This module defines action types and action creators for fetching file data
 * from an external API using the Redux Thunk middleware.
 */

export const FETCH_FILES_DATA = "FETCH_FILES_DATA";

/**
 * An asynchronous action creator for fetching file data using the provided
 * fileDataService instance. The fetched file data is then dispatched as a
 * Redux action with the FETCH_FILES_DATA action type.
 *
 * @returns {Function} A Redux Thunk action creator function.
 */
export const fetchFilesData = () => async (dispatch, _, { fileDataService }) => {
  const filesData = await fileDataService.getFileData();
  dispatch({
    type: FETCH_FILES_DATA,
    payload: filesData,
  });
};
