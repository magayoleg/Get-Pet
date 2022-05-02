import { combineReducers } from 'redux';
import loaderReducer from './loaderReducer';
import userReducer from './userReducer';
import advertisementReducer from './advertisementReducer';

const rootReducer = combineReducers({
  user: userReducer,
  loader: loaderReducer,
  advertisement: advertisementReducer
});

export default rootReducer;
