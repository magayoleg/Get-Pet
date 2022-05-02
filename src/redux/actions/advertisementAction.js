import { ADD_ADVERTISEMENT } from '../types/advertisementTypes';
import * as endPoints from '../../config/endPoints';

export const addAdvertisement = (advertisement) => async (dispatch) => {
  const response = await fetch(endPoints.addAdvertisement(), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(advertisement)
  });
  if (response.status === 200) {
    const newResponse = await response.json();
    dispatch({ type: ADD_ADVERTISEMENT, payload: newResponse });
  }
};
