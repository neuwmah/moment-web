import { makeStyles } from '@material-ui/core'
import antihack from '../../assets/antihack.png' 

const useStyles = makeStyles(theme => ({
    gridAntihack: {
        cursor: "pointer",
        backgroundColor: "black",
        backgroundImage: `url(${antihack})`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "auto 100%",
        transition: "0.3s",
        height: 160,
        '&:hover': {
            backgroundSize: "auto 103%"
        }
    },
    authorImage: {
        borderRadius: 3,
        marginRight: 15
    }, 
    newTitle: {
        cursor: "pointer"
    }
}))

export default useStyles