import { GET_ALL_PETS } from "../types/getAllPetsTypes";

export const ACTION_getAllPets = (pets) => {
  return {
    type: GET_ALL_PETS,
    payload: pets,
  };
};