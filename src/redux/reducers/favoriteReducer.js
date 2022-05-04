import initialState from '../initialState/initialState';
import { ADD_TO_FAVORITE, DELETE_FROM_FAVORITE, EDIT_FAVORITE } from '../types/adsTypes';

const favoriteReducer = ({ state = initialState, action }) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TO_FAVORITE:
      if (state.includes(payload)) {
        return state;
      }
      return [...state, payload];

    case DELETE_FROM_FAVORITE:
      return state.filter((el) => el.id !== payload);

    case EDIT_FAVORITE:
      return state.map((el) => {
        if (el.id === payload.id) {
          return payload;
        }
        return el;
      });

    default:
      return state;
  }
};

export default favoriteReducer;
