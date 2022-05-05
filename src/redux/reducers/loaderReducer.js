import { DISABLE_LOADER, ENABLE_LOADER } from '../types/loaderTypes';
import initialState from '../initialState/initialState';

const loaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ENABLE_LOADER:
      return true;

    case DISABLE_LOADER:
      return false;

    default:
      return state;
  }
};

export default loaderReducer;
