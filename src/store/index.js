import thunk from "redux-thunk";
import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/rootReducer';

const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('selected', serializedState);
    } catch(err) {
        console.log("error loading cache...")
    }
};

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('selected');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

const persistedState = loadState();
const store = createStore(
    rootReducer,
    {
        listings:[],
        ...persistedState
    },
    applyMiddleware(thunk)
);

store.subscribe(() => {
    saveState({
        selected: store.getState().selected
    });
});

export default store;