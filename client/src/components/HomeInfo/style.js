import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    button: {
        color: "white",
        backgroundColor: "#262626",
        transition: "0.3s",
        width: "100%",
        padding: 10,
        marginTop: 25,
        marginBottom: 25,
        borderRadius: 5,
        '&:hover': {
            backgroundColor: "black"
        }
    }
}))

export default useStyles