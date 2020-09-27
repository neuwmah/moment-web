import React from 'react'
import HomeSpotlight from '../HomeSpotlight'
import HomeNews from '../HomeNews'
import HomeInfo from '../HomeInfo'
import { 
    Grid, 
    Box
} from '@material-ui/core'

function HomeContent(props) {
    const { news } = props

    function isEmpty(obj) {
        for(var key in obj) {
            if(obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }

    return (
        <Box
        component={Grid} 
        container 
        direction="column"
        alignItems="center"
        pt={1.2}>
            { !isEmpty(news) ?
            <Box
            component={Grid}
            item
            px={0.8}
            xs={12}>
                <HomeSpotlight news={news} />  

                <Box
                component={Grid}
                container
                xs={12}>
                    <HomeNews news={news} />
                    <HomeInfo />
                </Box>
            </Box>
            :
            <Box textAlign="center">Nenhuma novidade encontrada.<br/>Registre-as no banco de dados!</Box>
            }
        </Box>
    )
}

export default HomeContent
