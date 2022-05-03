import { combineReducers } from 'redux';
import userReducer from './userReducer';
import loaderReducer from './loaderReducer';
import adsReducer from './adsReducer';
import favoriteReducer from './favoriteReducer';

const rootReducer = combineReducers({
  user: userReducer,
  loader: loaderReducer,
  ads: adsReducer,
  favorite: favoriteReducer,
});

export default rootReducer;
