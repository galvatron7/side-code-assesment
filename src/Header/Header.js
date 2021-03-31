import React from 'react';
import Constants from "../constants/Constants";
import {makeStyles} from "@material-ui/core/styles";
import {Link, useLocation} from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(() => ({
    header: {
        backgroundColor: "#F4F4F4",
    },
    innerHeader: {
        paddingLeft:"0"
    },
    head:{
        textTransform:"capitalize"
    },
    headSelected: {
        color:"#2D2D2D",
        borderBottom:"solid 2px red",
        textDecoration:"none"
    },
    headUnSelected: {
        color:"#2D2D2D",
        borderBottom:"solid 2px #CCCCCC",
        textDecoration:"none"
    }
}));

const Header = (props) => {
    const classes = useStyles();
    const {pathname} = useLocation();

    const menu = [{
        label: Constants.PROPERTY_LISTINGS_HEADER,
        to:"/"
    }, {
        label: Constants.SAVED_LISTINGS_HEADER,
        to:"/saved"
    }];

    return (
        <div>
            <AppBar position="static" className={classes.header} elevation={0}>
                <Container maxWidth="md">
                    <Toolbar className={classes.innerHeader}>
                        {
                            menu.map((item, idx) =>
                                <Button key={idx}>
                                    <Link to={item.to}
                                          className={`${classes.head} ${pathname === item.to ? classes.headSelected : classes.headUnSelected}`}>
                                        {item.label}
                                    </Link>
                                </Button>
                            )
                        }
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
};

export default  React.memo(Header);