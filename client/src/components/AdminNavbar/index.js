import React from 'react'
import logo from '../../assets/M.png'
import { RiAddFill, RiCloseFill, RiEditLine } from 'react-icons/ri'
import { 
    Drawer,
    Box,
    makeStyles
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
            padding: "10px 30px",
            fontSize: 15,
            marginTop: 20,
            '&:first-child': {
                marginTop: 0
            }
        },
        '& h3': {
            cursor: "pointer",
            fontWeight: "bold",
            color: "#ccc",
            transition: "0.1s",
            padding: "7px 30px",
            fontSize: 17,
            '&:hover': {
                color: "#fff"
            }
        }
    }
}))

function AdminNavbar() {
    const classes = useStyles()
    
    return (
        <>
        <Drawer
        variant="permanent">
            <Box className={classes.adminNavbar}>
                <img src={logo} alt="logo" />
                <h4>USUÁRIOS</h4>
                <h3><RiAddFill /> Adicionar usuário</h3>
                <h3><RiEditLine /> Editar usuário</h3>
                <h3><RiCloseFill /> Deletar usuário</h3>
                <h4>NOVIDADES</h4>
                <h3><RiAddFill /> Adicionar novidade</h3>
                <h3><RiEditLine /> Editar novidade</h3>
                <h3><RiCloseFill /> Deletar novidade</h3>
            </Box>
        </Drawer>
        </>
    )
}

export default AdminNavbar
