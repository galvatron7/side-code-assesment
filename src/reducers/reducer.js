import Constants from '../constants/Constants'

const initialState = {
    listings:[],
    selected:[]
};

export default (state, action) => {
    const newState = state || initialState;
    switch(action.type){
        case Constants.SET_SELECTED:
            return {
                ...newState,
                selected:action.payload
            };
        case Constants.FETCH_LISTINGS:
            return {
                ...newState,
                listings:action.payload
            };
        case Constants.SET_LISTINGS:
            return {
                ...newState,
                listings: action.payload
            };
        default:
            return newState;
    }
}