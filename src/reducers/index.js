import { combineReducers } from 'redux';
import tweets from './tweets'
import { loadingBarReducer } from 'react-redux-loading';

export default combineReducers({
    tweets,
    loadingBar: loadingBarReducer
})