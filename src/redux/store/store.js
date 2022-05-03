import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers/rootReducer';
import rootSaga from '../sagas/rootSaga';
import initialState from '../initialState/initialState';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk, sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);
export default store;
