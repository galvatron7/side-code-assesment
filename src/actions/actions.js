import Constants from "../constants/Constants";

const actions = {
    getListings
};

function getListings(){
    return async (dispatch) => {
        const response = await fetch('https://api.simplyrets.com/properties',{
            method:'get',
            headers: new Headers({
                'Authorization': 'Basic ' +  btoa("simplyrets:simplyrets"),
            })
        });
        const data = await response.json();
        let mlsListings = data.map((listing) => {
            return {
                bedrooms:listing.property.bedrooms,
                bathrooms:`${listing.property.bathsFull + (listing.property.bathsFull / 10)}`,
                footage:listing.property.area,
                price:listing.listPrice,
                address:listing.address,
                date:listing.listDate,
                photo:listing.photos[0],
                listingId:listing.listingId
            }
        });
        dispatch({type: Constants.SET_LISTINGS, payload: mlsListings});
    }
}

// function setSelected(selected){
//     filter(()=> {
//
//     })
// }

export default actions;