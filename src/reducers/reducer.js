import * as actions from '../actions/types';
const initialState = {
    listings:[],
    selected:[]
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actions.SET_SELECTED:
            return {
                ...state,
                selected:action.payload
            };
        case actions.FETCH_LISTINGS:
            return {
                ...state,
                listings:action.payload
            };
        case actions.SET_LISTINGS:
            return {
                ...state,
                listings: action.payload
            };
        default:
            return state;
    }
};

export default reducer;