import {combineReducers} from 'redux';
import reducer from "./reducer";
const rootReducer = combineReducers({
    state: reducer
});

export default rootReducer;