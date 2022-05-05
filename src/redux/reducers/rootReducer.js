import { combineReducers } from 'redux';
import loaderReducer from './loaderReducer';
import userReducer from './userReducer';
import advertisementReducer from './advertisementReducer';
import getAllPetsReducer from './getAllPetsReducer';

const rootReducer = combineReducers({
  user: userReducer,
  loader: loaderReducer,
  advertisement: advertisementReducer,
  getAllPets: getAllPetsReducer
});

export default rootReducer;
