import { GET_ALL_MESSAGES } from '../types/getAllMessages';

export const getAllFavouritesAction = (payload) => ({
  type: GET_ALL_MESSAGES,
  payload: payload
});
