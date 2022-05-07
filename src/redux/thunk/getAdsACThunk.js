import axios from 'axios';
import { getAllAds } from '../actions/adsAction';

const getAdsACThunk = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:4000/'); // переписать порт?
    dispatch(getAllAds(response.data.results)); // какой ответ приходит?
  } catch (error) {
    console.error(error); // переписать?
  }
};

export default getAdsACThunk;
