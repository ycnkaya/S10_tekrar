import {legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { cartReducer } from './cartReducer';
import { userReducer } from './userReducer';
import { productReducer } from './productReducer';

import {logger} from "redux-logger";
import {thunk} from "redux-thunk";


const allReducer = combineReducers({
  cartR: cartReducer,
  userR: userReducer,
  productR: productReducer
});

export const myStore = createStore(allReducer, applyMiddleware(thunk, logger));
