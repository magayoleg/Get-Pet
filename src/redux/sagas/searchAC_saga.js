import { SEARCH_AD } from '../types/adsTypes';

const searchAd = (ads) => ({
  type: SEARCH_AD,
  payload: ads,
});

export default searchAd;
