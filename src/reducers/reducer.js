import Constants from '../constants/Constants'

const initialState = {
    listings:[],
    selected:[]
};

export default (state, action) => {
    debugger;
    const newState = state || initialState;
    switch(action.type){
        // select for view
        case Constants.SET_SELECTED:
            console.log("selected: ", action.payload);
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