import initialState from '../initialState/initialState';
import { GET_ADS, ADD_AD } from '../types/adsTypes';

const adsReducer = ({ state = initialState, action }) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ADS:
      return payload;
    case ADD_AD:
      return [payload, ...state];

    default:
      return state;
  }
};

export default adsReducer;
