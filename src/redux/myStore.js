import { legacy_createStore as createStore, combineReducers } from 'redux';
import { cartReducer } from './cartReducer';
import { userReducer } from './userReducer';

const allReducer = combineReducers({
  cartR: cartReducer,
  userR: userReducer,
});

export const myStore = createStore(allReducer);
