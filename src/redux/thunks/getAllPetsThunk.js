// import axios from "axios";
import { ACTION_getAllPets } from "../actions/getAllPetsAction.js";

export const THUNK_getAllPets = (pets) => async (dispatch) => {
  // console.log('data----------------------------->', pets)
  const url = `http://localhost:3000/posts/?species=${pets}`;
  const r = await fetch(url);
  const result = await r.json();
  console.log('result ---------------------> ', result)
  dispatch(ACTION_getAllPets(result.data));
};