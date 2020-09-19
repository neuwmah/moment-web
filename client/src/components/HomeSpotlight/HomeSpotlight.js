import './style.scss'
import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import { Card, CardBody } from 'reactstrap'
import { useHistory } from 'react-router-dom';

function HomeSpotlight() {
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

    useEffect(() => {
        getNews() 
    }, [])

    return (
        <div className="spotlight">
            {news.sort(function(a, b){ 
                return a.spotlightRank - b.spotlightRank 
            }).filter(New => New.spotlightRank > 0).map(New => (
                <Card key={New._id} onClick={() => history.push('novidades/' + New.slug)} style={{ backgroundImage: "url(" + New.spotlightImage + ")" }}>
                    <CardBody>
                        <div className="text">
                            <p className="spotlight-subtitle">{New.subtitle}</p>
                            <p className="spotlight-title">{New.spotlightTitle}</p>
                        </div>
                    </CardBody>
                </Card>
            ))}
            <Card>
                <CardBody>
                    <h2 className="title">Novidades</h2>
                    <div className="news-list">
                        {news.map(New => { return <a href={"novidades/" + New.slug}><strong>{New.subtitle}:</strong> {New.title}</a> })}
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}

export default HomeSpotlight
