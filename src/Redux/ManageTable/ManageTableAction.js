import { DELETE_MEMBER, ADD_MEMBER, EDIT_MEMBER , CHANGE_INFO} from './Types';

export const deleteMember = id => {
  return dispatch => {
    dispatch({
      type: DELETE_MEMBER,
      payload: id,
    })
  };
};

export const addMember = member => {
  return dispatch => {
    dispatch({
      type: ADD_MEMBER,
      payload: member,
    })
  };
};

export const editMember = id => {
  return dispatch => {
    dispatch({
      type: EDIT_MEMBER,
      payload: id,
    })
  };
};

export const changeMemberInfo = info => {
  return dispatch => {
    dispatch({
      type: CHANGE_INFO,
      payload: info,
    })
  };
};