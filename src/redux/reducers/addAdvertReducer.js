import { ADD_ADVERTISEMENT } from '../types/addAdvertTypes';
import initialState from '../initialState/initialState';

const addAdvertReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ADVERTISEMENT:
      return [...state, action.payload];

    default:
      return state;
  }
};

export default addAdvertReducer;
