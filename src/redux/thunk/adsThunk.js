import axios from "axios";

const THUNK_getAdsFromDb = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:3001/');
    dispatch(ACTION_getAds(response.data.results));
  } catch (error) {
    console.log(error);
  }
}

export default THUNK_getAdsFromDb
