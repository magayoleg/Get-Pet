import { DELETE_USER, SET_USER } from '../types/userTypes';
import initialState from '../initialState/initialState';

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_USER:
      return payload;

    case DELETE_USER:
      return null;

    default:
      return state;
  }
};

export default userReducer;
