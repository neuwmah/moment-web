import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    paper: {
        display: "flex",
        justifyContent: "center",
        padding: 20,
        '& button': {
            backgroundColor: "black",
            color: "white",
            transition: "0.2s",
            height: 55,
            '&:hover': {
                backgroundColor: "#303030"
            }
        }
    }
}))

export default useStyles