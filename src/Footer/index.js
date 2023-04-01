import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(() => ({
    footer: {
        backgroundColor: "#F4F4F4",
        boxSizing:"border-box",
        height: "50px",
        padding:"5px",
        marginTop:"20px"
    }
}));

const Footer = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.footer}>
            <Container maxWidth="md">
                Footer
            </Container>
        </div>
    );
}

export default React.memo(Footer);