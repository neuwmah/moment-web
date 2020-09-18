import './style.scss'
import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import moment from 'moment'
import 'moment/locale/pt-br'
import { Card, CardBody } from 'reactstrap'

function HomeContent() {
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
        <div className="news">
            <div className="subspotlight">
                <Card>
                </Card>
            </div>

            <div className="news-list">
                {news.slice(0, 5).map(New => { return (
                    <Card key={New._id}>
                        <CardBody>
                            <div className="author">
                                <img src={"https://cravatar.eu/avatar/" + New.author + "/70.png"} alt="author" />
                                <div className="author-info">
                                    <p>{ New.author }</p>
                                    <p>{ moment(New.createdAt).format('LL') }</p>
                                </div>
                            </div>
                            <div className="title">
                                <p>{ New.subtitle }</p>
                                <h2>{ New.title }</h2>
                            </div>
                            <div className="content">
                                <p>{ New.content }</p>
                            </div>
                        </CardBody>
                    </Card>
                )})}
            </div>
        </div>
    )
}

export default HomeContent
