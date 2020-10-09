import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import logo from '../../assets/M.png'
import { RiAddFill, RiCloseFill, RiEditLine, RiHome2Line } from 'react-icons/ri'
import { 
    Drawer,
    Box,
    useTheme, 
    useMediaQuery
} from '@material-ui/core'
import useStyles from './style'

function AdminNavbar() {
    const classes = useStyles()
    const theme = useTheme()
    const history = useHistory()
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
                <Box onClick={() => history.push('/')}><h3><RiHome2Line /> Home</h3></Box>

                <h4>NOVIDADES</h4>
                <Box onClick={() => history.push('/admin/novidades/adicionar')}><h3><RiAddFill /> Adicionar novidade</h3></Box>
                <Box onClick={() => history.push('/admin/novidades/editar')}><h3><RiEditLine /> Editar novidade</h3></Box>
                <Box onClick={() => history.push('/admin/novidades/deletar')}><h3><RiCloseFill /> Deletar novidade</h3></Box>

                <h4>USUÁRIOS</h4>
                <Box onClick={() => history.push('/admin/usuarios/adicionar')}><h3><RiAddFill /> Adicionar usuário</h3></Box>
                <Box onClick={() => history.push('/admin/usuarios/editar')}><h3><RiEditLine /> Editar usuário</h3></Box>
                <Box onClick={() => history.push('/admin/usuarios/deletar')}><h3><RiCloseFill /> Deletar usuário</h3></Box>
            </Box>
        </Drawer>
        </>
    )
}

export default AdminNavbar
