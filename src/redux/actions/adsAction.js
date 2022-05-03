export const ACTION_getAllAds = (allAdsArray) => ({
  type: GET_ADS,
  payload: allAdsArray,
});

export const ACTION_getNewAd = (allAdsArray) => ({
  type: ADD_AD,
  payload: allAdsArray,
});

export const ACTION_deleteAd = (id) => ({
  type: DELETE_AD,
  payload: id,
});
