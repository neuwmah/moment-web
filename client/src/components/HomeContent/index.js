import React from 'react'
import HomeSpotlight from '../HomeSpotlight'
import HomeNews from '../HomeNews'
import HomeInfo from '../HomeInfo'
import { 
    Grid, 
    Box,
    createMuiTheme,
    ThemeProvider
} from '@material-ui/core'

const theme = createMuiTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1230,
        xl: 1480,
      },
    },
})

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
        <ThemeProvider theme={theme}>
            <Box
            component={Grid} 
            container 
            alignItems="center"
            justify="center"
            pt={1.2}>
                <Box
                component={Grid}
                item
                px={0.8}
                xl={8}
                lg={10}
                md={12}
                xs={12}>
                    { isEmpty(news) ? 
                    <Box textAlign="center" mb={1.2}>Nenhuma novidade encontrada.<br/>Registre-as no banco de dados!</Box> 
                    : 
                    <HomeSpotlight news={ !isEmpty(news) ? news : news } />  
                    }

                    <Box
                    component={Grid}
                    container>
                        <HomeNews news={news} />
                        <HomeInfo />
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    )
}

export default HomeContent
