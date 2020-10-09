import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    gridItem: {
        height: 450,
        marginBottom: 9.6
    },
    spotlight: {
        cursor: "pointer",
        backgroundColor: "black",
        backgroundPosition: "center center",
        backgroundSize: "110% auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        transition: "0.2s",
        height: 220,
        padding: 10,
        '&:hover': {
            backgroundSize: "115% auto"
        },
        '&:nth-child(2)': {
            marginTop: 9.6
        }
    },
    spotlightSubtitle: {
        color: "white",
        fontSize: 22,
        marginBottom: -3
    },
    spotlightTitle: {
        fontWeight: "bold",
        color: "white",
        fontSize: 30,
        letterSpacing: 0.3,
        lineHeight: 1
    },
    listTitle: {
        fontWeight: "bold",
        color: "white",
        fontSize: 22,
        marginBottom: 25
    },
    listItem: {
        cursor: "pointer",
        color: "white",
        marginBottom: 15
    }
}))

export default useStyles