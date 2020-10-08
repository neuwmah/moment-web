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
        if (Array.isArray(obj) && obj.length) return false 
        return true
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
                sm={9}
                xs={12}>
                    { !isEmpty(news) ? 
                    <HomeSpotlight news={news} /> : 
                    <p style={{ textAlign : "center", marginBottom : 9.6 }}><strong>ATENÇÃO: </strong>Projeto ainda em desenvolvimento!</p> }

                    <Box
                    component={Grid}
                    container>
                        { isEmpty(news) ? 
                        <HomeNews news={[{
                            _id: 1,
                            slug: "adicione-novidades-atraves-do-painel",
                            author: "NinguemNunka",
                            subtitle: "momentcraft-web",
                            title: "Bem-vindo(a) ao site do servidor!",
                            content: "Este é o futuro website do servidor MomentCraft! Para uma visualização completa, adicione novos registros ao banco de dados através do painel de administrador."
                        }]} />
                        : <HomeNews news={news} /> }

                        <HomeInfo />
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    )
}

export default HomeContent
