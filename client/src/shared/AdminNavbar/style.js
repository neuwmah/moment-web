import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    adminNavbar: {
        backgroundColor: "black",
        height: "100%",
        width: 250,
        '& img': {
            display: "flex",
            margin: "15px auto",
            width: 120,
            height: 120
        },
        '& h4': {
            fontWeight: "bold",
            color: "#505050",
            padding: "10px 15px",
            fontSize: 12,
            marginTop: 15
        },
        '& div': {
            width: 249,
            color: "#ccc",
            backgroundColor: "#202020",
            padding: "8px 12px",
            cursor: "pointer",
            transition: "0.14s",
            marginBottom: 1,
            '& h3': {
                fontWeight: "bold",
                fontSize: 14
            },
            '&:hover': {
                backgroundColor: "#eee",
                color: "black"
            }
        }
    }
}))

export default useStyles