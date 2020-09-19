import './style.scss'
import React from 'react'
import { Container } from 'reactstrap'
import HomeSpotlight from '../HomeSpotlight/HomeSpotlight'
import HomeNews from '../HomeNews/HomeNews'
import HomeInfo from '../HomeInfo/HomeInfo'

function index() {
    return (
        <div>
            <Container className="home-container">
                <HomeSpotlight />
                <div className="news-info">
                    <HomeNews />
                    <HomeInfo />
                </div>
            </Container>
        </div>
    )
}

export default index