import { DELETE_TAG, ADD_TAG } from './Types';

export const deleteTag = id => {
  return dispatch => {
    dispatch({
      type: DELETE_TAG,
      payload: id,
    })
  };
};

export const addTag = value => {
  return dispatch => {
    dispatch({
      type: ADD_TAG,
      payload: value,
    })
  };
};