import { getAllAds } from '../actions/adsAction';

const searchACThunk = (str) => async (dispatch) => {
  try {
    const response = await fetch(`/search/${str}`); // как на беке?
    const included = await response.json();
    dispatch(getAllAds(included));
  } catch (error) {
    console.error(error);// переписать?
  }
};

export default searchACThunk;
