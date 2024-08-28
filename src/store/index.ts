// outsource dependencies
import thunk from 'redux-thunk';
import { applyMiddleware, legacy_createStore as createStore, combineReducers } from 'redux';

const reducers = combineReducers({
  counter: () => 1,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
