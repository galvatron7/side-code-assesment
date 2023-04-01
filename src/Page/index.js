import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Header from "../Header";
import Footer from "../Footer";

const useStyles = makeStyles((theme) => ({
    root: {
        height: "100vh",
        display: "flex",
        flexFlow:"column",
        gap: theme.spacing(1)
    },
    container: {
        flex: "1 1 auto"
    }
}));

const Index = ({props, children}) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Header></Header>
            <Container className={classes.container} maxWidth="md">
            {children}
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Index;