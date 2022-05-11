import * as endPoints from '../../config/endPoints';
import { getAllTipsAction } from "../actions/getAllTipsAction";

export const getAllTipsThunk = () => async (dispatch) => {
  try {
    const response = await fetch(endPoints.getAllTips());
    const result = await response.json();
    console.log(result);
    dispatch(getAllTipsAction(result));
  } catch (error) {
    console.log(error);
  }
};