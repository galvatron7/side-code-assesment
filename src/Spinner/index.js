
import {makeStyles} from "@material-ui/core/styles";

import CircularProgress from "@material-ui/core/CircularProgress";
import React from "react";

const useStyles = makeStyles((theme) => ({
    top: {
        color: 'red',
        animationDuration: '550ms',
        position: 'absolute',
        left: "50%",
        top:"50%",
        strokeLinecap: 'round'
    }
}));

const Spinner = (props) => {
    const classes = useStyles();
    return (
        <CircularProgress color="secondary"
          variant="indeterminate"
          disableShrink
          className={classes.top}
          size={40}
          thickness={4}
        />
    );
};

export default Spinner;