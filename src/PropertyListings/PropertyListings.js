import React, {useEffect, useState} from 'react';
import Header from "../Header/Header";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import ListingTile from "../ListingTile/ListingTile";
import {makeStyles} from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import {useDispatch, useSelector} from "react-redux";
import actions from "../actions/actions";
import Constants from "../constants/Constants";

const useStyles = makeStyles(()=> ({
    top: {
        color: 'red',
        animationDuration: '550ms',
        position: 'absolute',
        left: "50%",
        top:"50%",
        strokeLinecap: 'round'
    }
}));

const PropertyListings = (props) => {
    const mlsData = useSelector(state => state.state.listings);
    const selectedItems = useSelector(state => state.state.selected);
    const [loading, setLoading] = useState(false);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        loadData()
    },[]);

    async function loadData(){
        setLoading(true);
        await dispatch(actions.getListings());
        setLoading(false);
    }

    const isSelected = (id) => {
        const selected = selectedItems.find((item) => item.listingId === id);
        return (selected)? true : false;
    };

    function setSelected (item) {
        if(isSelected(item.listingId))
            return;
        const newSelected = [...selectedItems,item];
        dispatch({type: Constants.SET_SELECTED, payload: newSelected});
    }

    function removeSelected (item) {
        const newSelected = selectedItems.filter((item) => item.listingId !== item.listingId);
        dispatch({type: Constants.SET_SELECTED, payload: newSelected});
    }

    return (
        <>
            <Header />
            <Container maxWidth="md">
                <h2>Property Listings</h2>
                <Grid  container  alignItems="center" spacing={3}>
                    {
                        (loading)?
                        <CircularProgress color="secondary"
                          variant="indeterminate"
                          disableShrink
                          className={classes.top}
                          size={40}
                          thickness={4}
                        /> :
                        mlsData.map((listing, idx) =>
                            <Grid item xs={4} sm={4} md={4} lg={4} key={idx}>
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
            </Container>
        </>
    )
};

export default PropertyListings;