import React from 'react'
import logo from '../../assets/M.png'
import { 
    Grid, 
    Box 
} from '@material-ui/core'

function Header() {
    return (
        <Box
        component={Grid}
        container
        justify="center"
        alignItems="center"
        bgcolor="black"
        height={200}>
            <img src={logo} alt="logo" height="90%" />
        </Box>
    )
}

export default Header
