import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

let ls = window.localStorage;

const writeToStorage = ({ getState }) => {
  return next => action => {
    let returnValue = next(action);
    ls.setItem('localData', JSON.stringify(getState()));
    
    return returnValue;
  }
}

const store = createStore(rootReducer, applyMiddleware(thunk, writeToStorage));

export default store;