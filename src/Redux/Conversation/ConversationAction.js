import { GET_ARCHIVED, GET_OPEN} from './Types';

export const getOpen = () => {
  return dispatch => {
    dispatch({
      type: GET_OPEN,
    })
  };
};

export const getArchived = () => {
  return dispatch => {
    dispatch({
      type: GET_ARCHIVED,
    })
  };
};

