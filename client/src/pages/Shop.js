import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { sum } from '../store/actions/Calculator.actions'
import Header from '../shared/Header'
import Navbar from '../shared/Navbar'
import { 
    Box,
    Grid
} from '@material-ui/core'

function Shop() {
    const dispatch = useDispatch()
    const result = useSelector(state => state.calculator)
    const [a, setA] = useState(0)
    const [b, setB] = useState(0)

    return (
        <>
            <Header />
            <Navbar />
            <Box
            component={Grid} 
            container 
            alignItems="center"
            justify="center"
            pt={1.2}>
                <Box
                component={Grid}
                item
                lg={2}
                display="flex"
                flexDirection="column">
                    <input type="text" placeholder="a" value={a} onChange={(e) => setA(Number(e.target.value))} />
                    <input type="text" placeholder="b" value={b} onChange={(e) => setB(Number(e.target.value))} />
                    
                    <button onClick={() => dispatch(sum(a, b))}>somar</button>

                    <div>{ result }</div>
                </Box>
            </Box>
        </>
    )
}

export default Shop