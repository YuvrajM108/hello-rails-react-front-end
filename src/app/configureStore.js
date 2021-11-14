import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import greetingReducer from './greetingsActions';

export const store = combineReducers({
  greetingReducer,
});

const store = createStore(
  reducers, 
  applyMiddleware(logger, thunk)
);

export default store;