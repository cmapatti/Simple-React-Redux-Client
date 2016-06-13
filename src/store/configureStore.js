import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import timerReducer from '../reducers/timer';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(timerReducer, initialState);
  return store;
}
