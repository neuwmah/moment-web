import React, { useState, useEffect } from 'react'
import api from '../services/api'
import HomeContent from '../components/HomeContent'
import { 
    Box,
    CircularProgress,
    makeStyles
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    loading: {
        marginTop: -250,
        position: "fixed",
        backgroundColor: "#ececec",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        transition: "0.3s",
        width: "100%",
        height: "100%",
        zIndex: 1
    }
}))

function Home() {
    const classes = useStyles()
    const [news, setNews] = useState([])
    const [loadingOpacity, setLoadingOpacity] = useState(true)
    const [loading, setLoading] = useState(true)

    async function getNews(){
        try {
            const loadedNews = await api.server.get('/')
            const { data } = loadedNews
            setNews(data.data)
        } catch(e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getNews()

        setTimeout(() => {
            setLoadingOpacity(false)
            setLoading(false)
        }, 1000)
    }, [])

    return (
        <>
            <Box className={classes.loading} style={{
                opacity: loadingOpacity ? 1 : 0,
                visibility: loading ? "visible" : "hidden"
            }}><CircularProgress color="gray" size={40} /></Box>
            <HomeContent news={news} />
        </>
    )
}

export default Home
