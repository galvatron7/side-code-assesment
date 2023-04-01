import React, {useEffect, useState} from 'react';

import Grid from "@material-ui/core/Grid";
import Page from "../Page";
import Spinner from "../Spinner";
import ListingTile from "../ListingTile";
import {useDispatch, useSelector} from "react-redux";
import actions from "../actions/actions";
import * as actConstants from "../actions/types";

const SavedListings = (props) => {
    const mlsData = useSelector(state => state.state.listings);
    const [savedListings, setSavedListings] = useState([]);
    const [loading, setLoading] = useState(false);
    const selectedItems = useSelector(state => state.state.selected);
    const dispatch = useDispatch();

    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            await dispatch(actions.getListings());
            const newMls = mlsData.filter((item) => isSelected(item.listingId));
            setSavedListings(newMls);
            setLoading(false);
        };
        loadData();
    },[]);

    const isSelected = (id) => {
        const selected = selectedItems.find((item) => item.listingId === id);
        return !!(selected);
    };

    const setSelected = (item) => {
        if(isSelected(item.listingId))
            return;
        const newSelected = [...selectedItems,item];
        dispatch({type: actConstants.SET_SELECTED, payload: newSelected});
    };

    function removeSelected(item){
        const newSelected = selectedItems.filter((selectedItem) => selectedItem.listingId !== item.listingId);
        dispatch({type: actConstants.SET_SELECTED, payload: newSelected});
    }

    return (
        <Page>
            <h2>Saved Listings</h2>
            <Grid container alignItems="center" spacing={3}>
                {
                    (loading)?
                        <Spinner/> :
                        savedListings.map((listing, idx) =>
                        <Grid item xs={4} key={listing.listingId}>
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

export default SavedListings;