import * as endPoints from '../../config/endPoints';
import { getAllFavouritesAction } from '../actions/getAllFavouritesAction';

export const getAllFavouritesThunk = () => async (dispatch) => {
  try {
    const response = await fetch(endPoints.getAllFavourites(), {
      credentials: 'include',
    });
    console.log('=====', response);
    const result = await response.json();
    console.log('+++++', result);
    dispatch(getAllFavouritesAction(result));
  } catch (error) {
    console.log(error);
  }
};
