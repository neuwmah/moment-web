import React, { useState } from 'react'
import api from '../../services/api'
import logo from '../../assets/M.png'
import { 
    Grid, 
    Box 
} from '@material-ui/core'

function Header() {
    const [onlinePlayers, setOP] = useState(0)

    api.mcstatus.get().then(res => {
        setOP(res.data.PlayersOnline)
        console.log(onlinePlayers) //temporary
    })

    return (
        <Box
        component={Grid}
        container
        justify="center"
        bgcolor="black"
        height={200}>
            <Box
            component={Grid}
            item
            justify="center"
            alignItems="center"
            display="flex"
            position="relative"
            height="100%"
            xl={6}
            lg={7}
            md={10} 
            sm={12} 
            xs={12}>
                <img src={logo} alt="logo" height="90%" />
            </Box>
        </Box>
    )
}

export default Header
