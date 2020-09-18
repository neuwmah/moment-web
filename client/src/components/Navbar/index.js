import './style.scss'
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { Container } from 'reactstrap'
import { BiMenu } from 'react-icons/bi'
import { RiAdminLine } from 'react-icons/ri'

function Navbar() {
    const history = useHistory()
    const [mobile, setMobile] = useState(false)

    useEffect(() => {
        window.innerWidth <= 1023 || (window.innerWidth <= 1080 && window.innerHeight >= 1366) ? setMobile(true) : setMobile(false)
    }, [mobile])

    return (
        <nav>
            <Container>
                <div>
                {mobile ? <button><BiMenu size={30} /></button> :
                <>
                    <button onClick={() => history.push('/')}>INÍCIO</button>
                    <button onClick={() => history.push('loja')}>LOJA</button>
                    <button onClick={() => history.push('banimentos')}>BANIMENTOS</button>
                    <button onClick={() => history.push('changelog')}>CHANGELOG</button>
                </>
                }
                </div>

                <div>
                    <button onClick={() => history.push('admin')}><RiAdminLine size={30} /></button>
                </div>
            </Container>
        </nav>
    )
}

export default Navbar
