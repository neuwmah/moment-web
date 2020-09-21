import React, { useState, useEffect } from 'react'
import { Grid, Paper, makeStyles, withStyles, Box, Typography, Tooltip, Zoom } from '@material-ui/core'
import api from '../../services/api'
import { useHistory } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'

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

const useStyles = makeStyles(theme => ({
    gridContainer: {
        height: 450,
        marginTop: 10
    },
    gridItem:{
        height: "100%"
    },
    spotlight: {
        backgroundColor: "black",
        height: "48%",
        backgroundSize: "110% auto",
        backgroundPosition: "center center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        paddingLeft: 10,
        paddingBottom: 5,
        cursor: "pointer",
        transition: "0.2s",
        '&:hover': {
            backgroundSize: "115% auto"
        },
        '&:nth-child(2)': {
            marginTop: 17
        }
    },
    spotlightSubtitle: {
        marginBottom: -10,
        fontSize: 22,
        color: "white"
    },
    spotlightTitle: {
        margin: 0,
        fontSize: 30,
        fontWeight: "bold",
        letterSpacing: 0.3,
        color: "white"
    },
    spotlightList: {
        backgroundColor: "#262626",
        padding: 25
    },
    listTitle: {
        color: "white",
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 25
    },
    listItem: {
        color: "white",
        cursor: "pointer",
        marginBottom: 15
    }
}))

function HomeSpotlight() {
    const classes = useStyles()
    const history = useHistory()
    const [news, setNews] = useState([])

    async function getNews(){
        try {
            const loadedNews = await api.server.get('/')
            const { data } = loadedNews
            setNews(data.data)
        } catch(e) {
            console.log(e)
        }
    }

    const handlePush = (slug) => {
        history.push("novidades/" + slug);
    }

    useEffect(() => {
        getNews() 
    }, [])

    return (
        <Box
        component={Grid} 
        container 
        className={classes.gridContainer}
        spacing={2} 
        justify="center" 
        alignItems="center">

            <Box 
            component={Grid}
            item 
            className={classes.gridItem}
            xl={4} 
            lg={4} 
            md={4} 
            sm={12} 
            xs={12}>
                {news.map(New => { if(New.spotlightRank === 1) return ( 
                    <Box 
                    component={Paper} 
                    className={classes.spotlight} 
                    boxShadow={3}
                    key={New._id}
                    minHeight="100%"
                    style={{backgroundImage: 'url(' + New.spotlightImage + ')'}}
                    onClick={() => { handlePush(New.slug) }}>
                        <Typography className={classes.spotlightSubtitle}>{New.subtitle}</Typography>
                        <Typography className={classes.spotlightTitle}>{New.spotlightTitle}</Typography>
                    </Box> 
                )})}
            </Box>

            <Box
            component={Grid}  
            item
            className={classes.gridItem}
            xl={4} 
            lg={4} 
            md={4} 
            sm={12} 
            xs={12}>
                {news.map(New => { if(New.spotlightRank > 1) return ( 
                    <Box 
                    component={Paper} 
                    className={classes.spotlight} 
                    boxShadow={3}
                    key={New._id}
                    style={{backgroundImage: 'url(' + New.spotlightImage + ')'}}
                    onClick={() => { handlePush(New.slug) }}>
                        <Typography className={classes.spotlightSubtitle}>{New.subtitle}</Typography>
                        <Typography className={classes.spotlightTitle}>{New.spotlightTitle}</Typography>
                    </Box>
                )})}
            </Box>

            <Box 
            component={Grid}
            item 
            className={classes.gridItem}
            xl={4} 
            lg={4} 
            md={4} 
            sm={12} 
            xs={12}>
                <Box 
                component={Paper} 
                className={classes.spotlightList} 
                boxShadow={3}
                minHeight="100%">
                    <Typography align="center" className={classes.listTitle} variant="h5"><FaStar /> Novidades</Typography>

                    {news.sort((a, b) => a.createdAt < b.createdAt ? 1 : -1).map(New => { return (
                        <CustomTooltip title={New.title} TransitionComponent={Zoom} placement="top" arrow key={New._id}>
                            <Typography 
                            className={classes.listItem} 
                            key={New._id}
                            onClick={() => { handlePush(New.slug) }}
                            noWrap>
                                {New.subtitle}: {New.title}
                            </Typography>
                        </CustomTooltip>
                    )})}
                </Box>
            </Box>

        </Box>
    )
}

export default HomeSpotlight;
