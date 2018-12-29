import { combineReducers } from 'redux';
// import usuarioReducer from 'usuarioReducer';
import commentsReducer from './commentsReducer'

export default combineReducers({
    comments: commentsReducer
});
