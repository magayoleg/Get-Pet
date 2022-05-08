import { combineReducers } from 'redux';
import userReducer from './userReducer';
import loaderReducer from './loaderReducer';
import adsReducer from './adsReducer';
import favoriteReducer from './favoriteReducer';
import addAdvertReducer from './addAdvertReducer';
import getAllSpeciesPetsReducer from './getAllSpeciesPetsReducer';
import getAllPetsReducer from './getAllPetsReducer';

const rootReducer = combineReducers({
  user: userReducer,
  loader: loaderReducer,
  ads: adsReducer,
  favorite: favoriteReducer,
  addAdvert: addAdvertReducer,
  getAllSpeciesPets: getAllSpeciesPetsReducer,
  getAllPets: getAllPetsReducer
});

export default rootReducer;
