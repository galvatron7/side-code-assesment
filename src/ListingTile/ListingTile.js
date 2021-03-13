import React, {useEffect, useState} from 'react';
import Constants from "../constants/Constants";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHart} from '@fortawesome/free-regular-svg-icons';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    media: {
        height: 140,
    },
    saveIcon: {
        position:"absolute",
        top:10,
        right:10,
        fontSize:20,
        color:"red"
    },
    unSaveIcon:{
        position:"absolute",
        top:10,
        right:10,
        fontSize:20,
        color:"#FFFFFF"
    },
    listDate: {
        fontSize:"10px",
        color:"#5F6368"
    },
    stAddress:{
        textTransform:"capitalize"
    },
}));

const ListingTile = ({values, setSelected, isSelected, removeSelected}) => {
    const classes = useStyles();
    const [saved, setSaved]= useState(false);

    let {
        bedrooms,
        bathrooms,
        footage,
        price,
        address,
        date,
        photo,
        listingId,
    } = values;

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
    });

    function onSave(){
        if(isSelected(listingId))
            removeSelected(values);
        else {
            setSelected(values);
        }
        setSaved(!saved);
    }

    useEffect(() => {
        if(isSelected){
            let savedItem = isSelected(listingId);
            setSaved(savedItem);
        }
    },[isSelected,listingId]);

    return (
        <Card>
            <CardActionArea>
                <CardMedia className={classes.media} image={photo} title="New House"/>
                <div onClick={(e) => onSave()}>
                    {
                        (saved)?
                        <FontAwesomeIcon className={classes.saveIcon} icon={faHeart}/> :
                        <FontAwesomeIcon className={classes.unSaveIcon} icon={farHart} />
                    }
                </div>
                <CardContent>
                     <span>{bedrooms} BR </span> |
                     <span> {bathrooms || Constants.NOT_AVAILABLE} {Constants.BATH_TEXT} </span>|
                     <span> {footage} {Constants.SQ_FT_TEXT} </span>
                    <Typography variant="h5" component="h2">
                        {formatter.format(price)}
                    </Typography>
                     <span className={classes.stAddress} style={{fontSize:"12px"}}>
                         {`
                             ${address.streetNumberText} 
                             ${address.streetName}, 
                             ${address.city}, 
                             ${address.state}
                         `}
                     </span>
                    <br/>
                     <span className={classes.listDate}>{Constants.LISTED_TEXT} {moment(date).format("MM/DD/YYYY")}</span>
                </CardContent>
            </CardActionArea>
        </Card>
    )
};
export default ListingTile;