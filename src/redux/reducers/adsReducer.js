import preloadedState from '../initialState/preloadedState';
import { ADD_AD, DELETE_AD, GET_ADS } from '../types/adsTypes';

const adsReducer = ({ state = preloadedState, action }) => {
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
