import { SEARCH_AD } from '../types/adsTypes';

const searchACSaga = (ads) => ({
  type: SEARCH_AD,
  payload: ads,
});

export default searchACSaga;
