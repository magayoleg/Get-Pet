import * as endPoints from '../../config/endPoints';
import { getAllSpeciesPetsAction } from "../actions/getAllSpeciesPetsAction";

export const getAllSpeciesPetsThunk = (pets) => async (dispatch) => {
  try {
    const response = await fetch(endPoints.getAllSpeciesPets(pets));
    const result = await response.json();
    dispatch(getAllSpeciesPetsAction(result));
  } catch (error) {
    console.log(error);
  }
};