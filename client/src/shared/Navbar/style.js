import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    navButton: {
        position: "relative",
        cursor: "pointer",
        color: "white",
        fontWeight: "bold",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: "25px",
        paddingRight: "25px",
        letterSpacing: 1.8,
        '&:hover': {
            backgroundColor: "#202020"
        },
        '& span': {
            backgroundColor: "black",
            position: "absolute",
            fontSize: "10px",
            padding: "3px 5px 3px 7px",
            right: 0,
            top: 0,
            margin: "8px 12px"
        }
    },
    mobileNavbar: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#262626",
        height: "100%",
        paddingTop: 60,
        '& div': {
            backgroundColor: "#212121",
            marginTop: 2,
            paddingTop: 15,
            paddingBottom: 15,
            paddingLeft: 100,
            paddingRight: 100
        }
    }
}))

export default useStyles