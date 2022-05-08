import { ADD_AD, DELETE_AD, GET_ADS } from '../types/adsTypes';
import initialState from '../initialState/initialState';

const adsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ADS:
      return payload;
    case ADD_AD:
      return [payload, ...state];
    case DELETE_AD:
      return state.filter((el) => el.id !== payload);
    default:
      return state;
  }
};

export default adsReducer;
