import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { BiMenu } from 'react-icons/bi'
import { RiAdminLine, RiShoppingBagLine } from 'react-icons/ri'
import { 
    Grid, 
    Box,
    useTheme, 
    useMediaQuery, 
    Drawer
} from '@material-ui/core'
import useStyles from './style'

function Navbar() {
    const classes = useStyles()
    const theme = useTheme()
    const history = useHistory()
    const [ mobileNavbar, setMobileNavbar ] = useState(false)
    const result = useSelector(state => state.calculator)

    const isMobile = useMediaQuery(theme.breakpoints.down('sm'), {
        defaultMatches: true
    })

    function handleMobileNav(slug){
        setMobileNavbar(false)
        history.push(slug)
    }

    return (
        <>
        <Drawer
        open={mobileNavbar}
        onEscapeKeyDown={() => setMobileNavbar(false)}
        onBackdropClick={() => setMobileNavbar(false)}>
            <Box className={classes.mobileNavbar}>
                <Box onClick={() => handleMobileNav('/')}>HOME</Box>
                <Box onClick={() => handleMobileNav('/loja')}>LOJA</Box>
                <Box onClick={() => handleMobileNav('/banimentos')}>BANIMENTOS</Box>
            </Box>
        </Drawer>
        <Box
        component={Grid} 
        container 
        justify="center"
        alignItems="center"
        bgcolor="#262626">
            <Grid
            item
            px={0.8}
            xl={8}
            lg={10}
            md={12}
            sm={9}
            xs={12}>
                <Box
                display="flex"
                justifyContent="space-between"
                width="100%"
                height={50}>
                    <Box display="flex">
                        {isMobile ?
                        <Box 
                        className={classes.navButton}
                        onClick={() => {
                            setMobileNavbar(!mobileNavbar)
                        }}>
                            <BiMenu fontSize="24px" />
                        </Box>
                        :
                        <>
                        <Box className={classes.navButton} onClick={() => ( history.push('/'))}>HOME</Box>
                        <Box className={classes.navButton} onClick={() => ( history.push('/loja'))}>LOJA</Box>
                        <Box className={classes.navButton} onClick={() => ( history.push('/banimentos'))}>BANIMENTOS</Box>
                        </>
                        }
                    </Box>

                    <Box display="flex">
                        <Box className={classes.navButton} onClick={() => ( history.push('/carrinho'))}>
                            <span>{ result }</span><RiShoppingBagLine fontSize="24px" />
                        </Box>
                        <Box className={classes.navButton} onClick={() => ( history.push('/admin'))}>
                            <RiAdminLine fontSize="24px" />
                        </Box>
                    </Box>
                </Box>
            </Grid>
        </Box>
        </>
    )
}

export default Navbar
