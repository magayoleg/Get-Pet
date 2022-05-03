import { ADD_TO_FAVORITE, DELETE_FROM_FAVORITE, EDIT_FAVORITE } from '../types/adsTypes';

export const addToFavorite = (ad) => ({
  type: ADD_TO_FAVORITE,
  payload: ad,
});

export const deleteFromFavorite = (id) => ({
  type: DELETE_FROM_FAVORITE,
  payload: id,
});

export const editFavorite = (ad) => ({
  type: EDIT_FAVORITE,
  payload: ad,
});
