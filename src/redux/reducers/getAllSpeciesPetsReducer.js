import { GET_ALL_SPECIES_PETS } from '../types/getPetsTypes';
import initialState from '../initialState/initialState';

const getAllSpeciesPetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_SPECIES_PETS:
      return action.payload;
    default:
      return state;
  }
};

export default getAllSpeciesPetsReducer;
