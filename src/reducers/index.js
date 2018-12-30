import { combineReducers } from 'redux';
import authReducer from './authReducer';
import commentsReducer from './commentsReducer'

export default combineReducers({
    comments: commentsReducer,
    auth: authReducer
});
