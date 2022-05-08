import { GET_ALL_PETS } from '../types/getPetsTypes';
import initialState from '../initialState/initialState';

const getAllPetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PETS:
      return action.payload;
    default:
      return state;
  }
};

export default getAllPetsReducer;
