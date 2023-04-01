import React, {useEffect, useState} from 'react';

import Grid from "@material-ui/core/Grid";
import ListingTile from "../ListingTile/ListingTile";
import Page from "../Page/Page";
import Spinner from "../Spinner/Spinner";
import {useDispatch, useSelector} from "react-redux";
import actions from "../actions/actions";
import * as actConstants from "../actions/types";

const PropertyListings = (props) => {
    const mlsData = useSelector(state => state.state.listings);
    const selectedItems = useSelector(state => state.state.selected);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        const loadData = async () =>{
            setLoading(true);
            await dispatch(actions.getListings());
            setLoading(false);
        }
        loadData()
    },[]);

    const isSelected = (id) => {
        const selected = selectedItems.find((item) => item.listingId === id);
        return !!(selected);
    };

    function setSelected (item) {
        if(isSelected(item.listingId))
            return;
        const newSelected = [...selectedItems,item];
        dispatch({type: actConstants.SET_SELECTED, payload: newSelected});
    }

    function removeSelected (item) {
        const newSelected = selectedItems.filter((selectedItem) => selectedItem.listingId !== item.listingId);
        dispatch({type: actConstants.SET_SELECTED, payload: newSelected});
    }

    return (
        <Page>
            <h2>Property Listings</h2>
            <Grid container alignItems="center" spacing={3}>
                {
                    (loading)?
                    <Spinner/> :
                    mlsData.map((listing, idx) =>
                        <Grid item xs={4} sm={4} md={4} lg={4} key={listing.listingId}>
                            <ListingTile
                                values={listing}
                                setSelected={setSelected}
                                isSelected={isSelected}
                                removeSelected={removeSelected}
                            />
                        </Grid>
                    )
                }
            </Grid>
        </Page>
    )
};

export default PropertyListings;