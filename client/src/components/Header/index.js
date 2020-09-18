import './style.scss'
import React, { useState } from 'react'
import { Container } from 'reactstrap'
import logo from '../../assets/M.png'
import api from '../../services/api'

function Header() {
    const [onlinePlayers, setOP] = useState(0)

    api.mcstatus.get().then(res => {
        setOP(res.data.PlayersOnline)
    })

    return (
        <div className="header">
            <Container>
                <p><strong>{onlinePlayers}</strong><br/>Jogadores Online</p>
                <img src={logo} alt="logo" />
            </Container>
        </div>
    )
}

export default Header
