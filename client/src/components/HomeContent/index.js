import React from 'react'
import HomeSpotlight from '../HomeSpotlight'
import HomeNews from '../HomeNews'
import HomeInfo from '../HomeInfo'
import { Grid, Box } from '@material-ui/core'

function index() {
    return (
        <Box
        component={Grid} 
        container 
        direction="column"
        alignItems="center"
        pt={1.2}>
            <Box
            component={Grid}
            item
            px={0.8}
            xs={12}>
                <HomeSpotlight />

                <Box
                component={Grid}
                container
                xs={12}>
                    <HomeNews />
                    <HomeInfo />
                </Box>
            </Box>
        </Box>
    )
}

export default index
