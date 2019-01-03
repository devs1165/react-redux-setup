import { combineReducers } from 'redux';
import test from './testReducer';
import persistState from 'redux-localstorage';

const appReducer = combineReducers({
    test
})

const rootReducer = ( state, action ) => {
    if( action.type === "USER_LOGOUT" ) {
        // Object.keys(state).forEach(key => {
        //     persistState.removeItem(`persist:${key}`);
        // });
        state = undefined;
    }
        
    return appReducer(state, action)
}

export default rootReducer;