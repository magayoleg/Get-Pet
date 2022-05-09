import { combineReducers } from 'redux';
import loaderReducer from './loaderReducer';
import userReducer from './userReducer';
import addAdvertReducer from './addAdvertReducer';
import getAllPetsReducer from './getAllPetsReducer';
import modalReducer from './modalReducer';


const rootReducer = combineReducers({
  user: userReducer,
  loader: loaderReducer,
  addAdvert: addAdvertReducer,
  getAllPets: getAllPetsReducer,
  modal: modalReducer,
});

export default rootReducer;
