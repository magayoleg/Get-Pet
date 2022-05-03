import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import initialState from '../initialState/initialState';
import rootReducer from '../reducers/rootReducer';

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
