import React from 'react'
import { useHistory } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'
import { 
    Grid, 
    Paper,  
    withStyles, 
    useTheme, 
    useMediaQuery, 
    Box, 
    Typography, 
    Tooltip, 
    Zoom
} from '@material-ui/core'
import useStyles from './style'

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

function HomeSpotlight({ news, spotlightNews }) {
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
                <Box 
                component={Paper} 
                className={classes.spotlight} 
                minHeight="100%"
                elevation={5}
                style={{
                    backgroundImage: 'url(' + spotlightNews[2].spotlightImage + ')'
                }}
                onClick={() => { 
                    history.push("novidades/" + spotlightNews[2].slug);
                }}>
                    <Typography className={classes.spotlightSubtitle}>{spotlightNews[2].subtitle}</Typography>
                    <Typography className={classes.spotlightTitle}>{spotlightNews[2].spotlightTitle}</Typography>
                </Box> 
            </Box>

            <Box
            component={Grid}  
            item
            className={classes.gridItem}
            px={isMobile ? 0 : 0.4}
            md={4} 
            xs={12}>
                <Box 
                component={Paper} 
                className={classes.spotlight} 
                elevation={5}
                style={{
                    backgroundImage: 'url(' + spotlightNews[1].spotlightImage + ')'
                }}
                onClick={() => { 
                    history.push("novidades/" + spotlightNews[1].slug);
                }}>
                    <Typography className={classes.spotlightSubtitle}>{spotlightNews[1].subtitle}</Typography>
                    <Typography className={classes.spotlightTitle}>{spotlightNews[1].spotlightTitle}</Typography>
                </Box>
                
                <Box 
                component={Paper} 
                className={classes.spotlight} 
                elevation={5}
                style={{
                    backgroundImage: 'url(' + spotlightNews[0].spotlightImage + ')'
                }}
                onClick={() => { 
                    history.push("novidades/" + spotlightNews[0].slug);
                }}>
                    <Typography className={classes.spotlightSubtitle}>{spotlightNews[0].subtitle}</Typography>
                    <Typography className={classes.spotlightTitle}>{spotlightNews[0].spotlightTitle}</Typography>
                </Box>
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

                    {news
                    .sort((a, b) => a.createdAt < b.createdAt ? 1 : -1)
                    .map(New => { return (
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