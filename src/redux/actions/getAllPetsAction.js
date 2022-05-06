import { GET_ALL_PETS } from '../types/getAllPetsTypes';
import * as endPoints from '../../config/endPoints';

export const getAllPetsAction = (animal) => async (dispatch) => {
  const response = await fetch(endPoints.getAllPets(animal));

  if (response.status === 200) {
    const newResponse = await response.json();
    dispatch({ type: GET_ALL_PETS, payload: newResponse });
  }
};