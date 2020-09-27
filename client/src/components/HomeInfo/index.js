import React from 'react'
import { 
    Grid, 
    Box,
    Paper,
    useTheme,
    useMediaQuery,
    makeStyles
} from '@material-ui/core'

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

function HomeInfo() {
    const classes = useStyles()
    const theme = useTheme()

    const isMobile = useMediaQuery(theme.breakpoints.down('sm'), {
        defaultMatches: true
    })
    
    return (
        <Box
        component={Grid}
        item
        pl={isMobile ? 0 : 0.8}
        md={4}
        xs={12}>
            <Box
            component={Paper}
            textAlign="center"
            height="auto"
            elevation={5}
            p={6}>
                <Box fontSize={26}>Versão 1.5.2</Box>
                <Box>JOGAR.MOMENTCRAFT.COM.BR</Box>
                <button 
                className={classes.button}>
                    COPIAR IP
                </button>
                <Box>Recomendamos que você utilize o <strong>anti-hack</strong> para jogar no servidor.</Box>
            </Box>
            
            <Box
            component={Paper}
            overflow="hidden"
            height={500}
            elevation={5}
            my={1.2}>
                <iframe 
                src="https://discordapp.com/widget?id=570650071243161603&theme=light" 
                title="discord"
                height="100%"
                width="100.1%" />
            </Box>
        </Box>
    )
}

export default HomeInfo
