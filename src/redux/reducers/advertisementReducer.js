import { ADD_ADVERTISEMENT } from '../types/advertisementTypes';

// eslint-disable-next-line default-param-last
const advertisementReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ADVERTISEMENT:
      return [...state, action.payload];

    default:
      return state;
  }
};

export default advertisementReducer;
