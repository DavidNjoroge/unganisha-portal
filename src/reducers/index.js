import { combineReducers } from 'redux';
import requ from './requ'
import ambulance from './ambulance'

// import auth from './auth'

const rootReducer = combineReducers({
    requ,
    ambulance
});

export default rootReducer;
