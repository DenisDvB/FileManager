// instruments
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { managerReducer } from '../bus/Reducers/managerReducer/managerReducer';

export const rootReducer = combineReducers({
  managerStore: managerReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

