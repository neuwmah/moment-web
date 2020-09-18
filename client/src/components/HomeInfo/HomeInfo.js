import './style.scss'
import React from 'react'
import { Card, CardBody } from 'reactstrap'

function HomeInfo() {
    return (
        <div className="info">
            <div className="ip">
                <Card>
                    <CardBody>
                        <h3>Versão 1.5.2</h3>
                        <p className="ip-address">JOGAR.MOMENTCRAFT.COM.BR</p>
                        <button id="btn-ip">COPIAR IP</button>
                        <p className="ip-info">Recomendamos que você utilize o <span className="font-weight-bold">anti-hack</span> para jogar no servidor.</p>
                    </CardBody>
                </Card>
            </div>

            <div className="discord">
                <Card>
                    <CardBody>
                        <iframe className="discord-widget" src="https://discordapp.com/widget?id=570650071243161603&theme=light" title="discord" allowtransparency="true" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}

export default HomeInfo
