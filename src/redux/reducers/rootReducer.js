import { combineReducers } from 'redux';
import loaderReducer from './loaderReducer';
import userReducer from './userReducer';
import addAdvertReducer from './addAdvertReducer';
import getAllSpeciesPetsReducer from './getAllSpeciesPetsReducer';
import getAllPetsReducer from './getAllPetsReducer';
import getOneAdvertReducer from './getOneAdvertReducer';

const rootReducer = combineReducers({
  user: userReducer,
  loader: loaderReducer,
  addAdvert: addAdvertReducer,
  getAllSpeciesPets: getAllSpeciesPetsReducer,
  getAllPets: getAllPetsReducer,
  getOneAdvert: getOneAdvertReducer
});

export default rootReducer;
