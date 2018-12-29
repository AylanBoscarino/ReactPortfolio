import { createStore, applyMiddleware } from 'redux';
import thunk from 'thunk';
import rootReducer from './reducers';

const initialState = {};

export default createStore(rootReducer, initialState, applyMiddleware(thunk));
