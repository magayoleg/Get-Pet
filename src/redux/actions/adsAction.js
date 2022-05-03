import { ADD_AD, DELETE_AD, GET_ADS } from '../types/adsTypes';

export const getAllAds = (allAdsArray) => ({
  type: GET_ADS,
  payload: allAdsArray,
});

export const addAd = (ad) => ({
  type: ADD_AD,
  payload: ad,
});

export const deleteAd = (id) => ({
  type: DELETE_AD,
  payload: id,
});
