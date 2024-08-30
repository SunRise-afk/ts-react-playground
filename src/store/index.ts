// outsource dependencies
import thunk from 'redux-thunk';
import { applyMiddleware, legacy_createStore as createStore, combineReducers } from 'redux';

import appReducer from '@/app/class/controller.ts';
import funcReducer from '@/app/func-redux/controller.ts';

const reducers = combineReducers({
  app: appReducer,
  func: funcReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export type RootState = ReturnType<typeof reducers>;

export default store;
