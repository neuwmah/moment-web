import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { BiMenu } from 'react-icons/bi'
import { RiAdminLine, RiShoppingBagLine } from 'react-icons/ri'
import { 
    Grid, 
    Box,
    makeStyles,
    useTheme, 
    useMediaQuery, 
    Drawer
} from '@material-ui/core'

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
