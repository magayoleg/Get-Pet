import { combineReducers } from 'redux';
import loaderReducer from './loaderReducer';
import userReducer from './userReducer';
import addAdvertReducer from './addAdvertReducer';
import getAllPetsReducer from './getAllPetsReducer';


const rootReducer = combineReducers({
  user: userReducer,
  loader: loaderReducer,
  addAdvert: addAdvertReducer,
  getAllPets: getAllPetsReducer
});

export default rootReducer;
