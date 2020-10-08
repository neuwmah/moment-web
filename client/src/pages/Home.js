import React, { useState, useEffect } from 'react'
import api from '../services/api'
import HomeContent from '../components/HomeContent'

function Home() {
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

    useEffect(() => {
        getNews()
    }, [])

    return (
        <>
            <HomeContent news={news} />
        </>
    )
}

export default Home
