import { ADD_ADVERTISEMENT } from '../types/advertisementTypes';
import * as endPoints from '../../config/endPoints';

export const addAdvertisement = (formData) => async (dispatch) => {
  const response = await fetch(endPoints.addAdvertisementPoint(), {
    method: 'POST',
    body: formData
  });
  
  if (response.status === 200) {
    const newResponse = await response.json();
    dispatch({ type: ADD_ADVERTISEMENT, payload: newResponse });
  }
};
