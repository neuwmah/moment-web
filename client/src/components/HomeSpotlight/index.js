import React from 'react'
import { useHistory } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'
import { 
    Grid, 
    Paper, 
    makeStyles, 
    withStyles, 
    useTheme, 
    useMediaQuery, 
    Box, 
    Typography, 
    Tooltip, 
    Zoom
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    gridItem: {
        height: 450,
        marginBottom: 9.6
    },
    spotlight: {
        cursor: "pointer",
        backgroundColor: "black",
        backgroundPosition: "center center",
        backgroundSize: "110% auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        transition: "0.2s",
        height: 220,
        padding: 10,
        '&:hover': {
            backgroundSize: "115% auto"
        },
        '&:nth-child(2)': {
            marginTop: 9.6
        }
    },
    spotlightSubtitle: {
        color: "white",
        fontSize: 22,
        marginBottom: -3
    },
    spotlightTitle: {
        fontWeight: "bold",
        color: "white",
        fontSize: 30,
        letterSpacing: 0.3,
        lineHeight: 1
    },
    listTitle: {
        fontWeight: "bold",
        color: "white",
        fontSize: 22,
        marginBottom: 25
    },
    listItem: {
        cursor: "pointer",
        color: "white",
        marginBottom: 15
    }
}))

const CustomTooltip = withStyles({
    tooltip: {
        backgroundColor: "white",
        color: "black",
        opacity: 1,
        fontSize: 12
    },
    arrow: {
        color: "white"
    }
})(Tooltip);

function HomeSpotlight(props) {
    const { news } = props
    const classes = useStyles()
    const theme = useTheme()
    const history = useHistory()

    const isMobile = useMediaQuery(theme.breakpoints.down('sm'), {
        defaultMatches: true
    })

    return (
        <Box
        component={Grid} 
        container>
            <Box 
            component={Grid}
            item 
            className={classes.gridItem}
            pr={isMobile ? 0 : 0.8}
            md={4}  
            xs={12}>
                {news.filter(New => New.spotlightRank === 1).map(New => { return ( 
                <Box 
                key={New._id}
                component={Paper} 
                className={classes.spotlight} 
                minHeight="100%"
                elevation={5}
                style={{
                    backgroundImage: 'url(' + New.spotlightImage + ')'
                }}
                onClick={() => { 
                    history.push("novidades/" + New.slug);
                }}>
                    <Typography className={classes.spotlightSubtitle}>{New.subtitle}</Typography>
                    <Typography className={classes.spotlightTitle}>{New.spotlightTitle}</Typography>
                </Box> 
                )})}
            </Box>

            <Box
            component={Grid}  
            item
            className={classes.gridItem}
            px={isMobile ? 0 : 0.4}
            md={4} 
            xs={12}>
                {news.filter(New => New.spotlightRank > 1).map(New => { return ( 
                <Box 
                key={New._id}
                component={Paper} 
                className={classes.spotlight} 
                elevation={5}
                style={{
                    backgroundImage: 'url(' + New.spotlightImage + ')'
                }}
                onClick={() => { 
                    history.push("novidades/" + New.slug);
                }}>
                    <Typography className={classes.spotlightSubtitle}>{New.subtitle}</Typography>
                    <Typography className={classes.spotlightTitle}>{New.spotlightTitle}</Typography>
                </Box>
                )})}
            </Box>

            <Box 
            component={Grid}
            item 
            className={classes.gridItem}
            pl={isMobile ? 0 : 0.8}
            md={4} 
            xs={12}>
                <Box 
                component={Paper} 
                bgcolor="#262626"
                minHeight="100%"
                elevation={5}
                p={3}>
                    <Typography 
                    className={classes.listTitle} 
                    variant="h5" 
                    align="center">
                        <FaStar /> Novidades
                    </Typography>

                    {news.sort((a, b) => a.createdAt < b.createdAt ? 1 : -1).map(New => { return (
                    <CustomTooltip 
                    key={New._id}
                    title={New.title} 
                    arrow
                    TransitionComponent={Zoom} 
                    placement="top">
                        <Typography 
                        key={New._id}
                        className={classes.listItem} 
                        noWrap
                        onClick={() => { 
                            history.push("novidades/" + New.slug); 
                        }}>
                            <strong>{New.subtitle}:</strong> {New.title}
                        </Typography>
                    </CustomTooltip>
                    )})}
                </Box>
            </Box>
        </Box>
    )
}

export default HomeSpotlight;