import get from 'lodash/get';
import * as actionTypes from '../actions/user';
import { updateObject } from '../../../store/utility';

const _ = { get };
const initialState = {
  UserData: [],
};
const userRequest = (state, action) => {
  return updateObject(state, {
    UserData: []
  });
};
const userSuccess = (state, action) => {
  console.log('in to reducer action.payload', action.payload);
  return updateObject(state, {
    UserData: action.payload
  });
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_REQUEST:
      return userRequest(state, action);

    case actionTypes.USER_SUCCESS:
      return userSuccess(state, action);

    default:
      return state;
  }
};
