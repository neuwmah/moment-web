import React, { useState } from 'react'
import logo from '../../assets/M.png'
import { RiAddFill, RiCloseFill, RiEditLine, RiHome2Line } from 'react-icons/ri'
import { 
    Drawer,
    Box,
    makeStyles,
    useTheme, 
    useMediaQuery
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    adminNavbar: {
        backgroundColor: "black",
        height: "100%",
        width: 250,
        '& img': {
            display: "flex",
            margin: "15px auto",
            width: 120,
            height: 120
        },
        '& h4': {
            fontWeight: "bold",
            color: "#505050",
            padding: "10px 15px",
            fontSize: 12,
            marginTop: 15
        },
        '& div': {
            width: 249,
            color: "#ccc",
            backgroundColor: "#202020",
            padding: "8px 12px",
            cursor: "pointer",
            transition: "0.14s",
            marginBottom: 1,
            '& h3': {
                fontWeight: "bold",
                fontSize: 14
            },
            '&:hover': {
                backgroundColor: "#eee",
                color: "black"
            }
        }
    }
}))

const AdminNavbar = params => {
    const classes = useStyles()
    const theme = useTheme()
    const [ mobileNavbar, setMobileNavbar ] = useState(false)

    const isMobile = useMediaQuery(theme.breakpoints.down('sm'), {
        defaultMatches: true
    })
    
    return (
        <>
        <Drawer
        variant={ isMobile ? "temporary" : "permanent" }
        open={mobileNavbar}
        onEscapeKeyDown={() => setMobileNavbar(false)}
        onBackdropClick={() => setMobileNavbar(false)}>
            <Box className={classes.adminNavbar}>
                <img src={logo} alt="logo" />
                <Box onClick={() => params.setRouter(0)}><h3><RiHome2Line /> Home</h3></Box>
                <h4>NOVIDADES</h4>
                <Box onClick={() => params.setRouter(1)}><h3><RiAddFill /> Adicionar novidade</h3></Box>
                <Box onClick={() => params.setRouter(2)}><h3><RiEditLine /> Editar novidade</h3></Box>
                <Box onClick={() => params.setRouter(3)}><h3><RiCloseFill /> Deletar novidade</h3></Box>
                <h4>USUÁRIOS</h4>
                <Box onClick={() => params.setRouter(4)}><h3><RiAddFill /> Adicionar usuário</h3></Box>
                <Box onClick={() => params.setRouter(5)}><h3><RiEditLine /> Editar usuário</h3></Box>
                <Box onClick={() => params.setRouter(6)}><h3><RiCloseFill /> Deletar usuário</h3></Box>
            </Box>
        </Drawer>
        </>
    )
}

export default AdminNavbar
