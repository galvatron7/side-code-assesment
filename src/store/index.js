import thunk from "redux-thunk";
import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/rootReducer';
import * as actConstants from "../actions/types";

const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch(err) {
        console.log("Error loading cache...")
    }
};

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return { selected:[] };
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return { selected:[] };
    }
};

const persistedState = loadState();
const store = createStore(
    rootReducer,
    {state: {
            listings: [],
            ...persistedState
        }
        },
    applyMiddleware(thunk)
);

store.dispatch({type: actConstants.SET_SELECTED, payload: persistedState.selected || []});

store.subscribe(() => {
    saveState({
        selected: store.getState().state.selected
    });
});

export default store;