// outsource dependencies
import thunk from 'redux-thunk';
import { applyMiddleware, legacy_createStore as createStore, combineReducers } from 'redux';

import appReducer, { State as appState } from '@/app/class/controller.ts';

export interface StoreState {
  app: appState
}

const reducers = combineReducers<StoreState>({
  app: appReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
