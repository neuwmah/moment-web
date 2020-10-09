import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { loadUsers } from '../../store/reducer/Users.reducer'
import { selectAllUsers } from '../../store/selectors/Users.selector'

import api from '../../services/api'
import { Formik, Field } from 'formik'
import {
    Grid,
    Box,
    Paper,
    TextField,
    MenuItem,
    FormControl,
    Button,
    useMediaQuery,
    useTheme
} from '@material-ui/core'
import useStyles from './style'

function AdminNewAdd() {
    const dispatch = useDispatch()
    const users = useSelector(selectAllUsers)
    const classes = useStyles()
    const theme = useTheme()

    useEffect(() => {
        dispatch(loadUsers())
    }, [dispatch])

    const isMobile = useMediaQuery(theme.breakpoints.down('sm'), {
        defaultMatches: true
    })

    async function addNew(data){
        await api.server.post('/admin/novidades/adicionar', data).then(res => {
            console.log(res)
        }).catch(e => {
            console.log(e)
        })
    }

    return (
        <Box
        component={Grid}
        container
        alignItems="center"
        justify="center"
        height="100vh"
        paddingLeft={ isMobile ? "0" : "250px" }>
            <Box
            component={Grid}
            item
            p={1.2}>
                <Box
                component={Paper}
                className={classes.paper}
                elevation={5}>
                    <Formik initialValues={{ 
                        user_id: '',
                        title: '',
                        subtitle: '',
                        slug: '',
                        content: '',
                        spotlightRank: 0,
                        spotlightTitle: '',
                        spotlightImage: ''  
                    }} onSubmit={(data, {setSubmitting}) => {
                        setSubmitting(true)
                        console.log(data)
                        addNew(data)
                        setSubmitting(false)
                    }}>
                        {({ values, isSubmitting, handleChange, handleBlur, handleSubmit }) => (
                        <form onSubmit={handleSubmit}>
                            <FormControl>
                                <Box textAlign="center" mb={2}>
                                    <strong>ATENÇÃO:</strong> Ainda não é possível adicionar novos usuários através do painel :(<br/>
                                    Para prosseguir, adicione-os manualmente no banco de dados.
                                </Box>
                                <Field
                                    name="user_id" 
                                    type="input" 
                                    as={TextField} 
                                    variant="outlined" 
                                    label="Autor" 
                                    required
                                    select
                                    helperText="ex. NinguemNunka">
                                    {users.filter(User => User.admin === 1).map(User => { return (
                                        <MenuItem key={User._id} value={User._id}>{User.nickname}</MenuItem>
                                    )})}
                                </Field>
                                <br/>
                                <Field 
                                    name="title" 
                                    type="input" 
                                    as={TextField} 
                                    variant="outlined" 
                                    label="Título"
                                    required
                                    helperText="ex. Hot-Potato!" />
                                <br/>
                                <Field 
                                    name="subtitle" 
                                    type="input" 
                                    as={TextField} 
                                    variant="outlined" 
                                    label="Subtítulo"
                                    required
                                    helperText="ex. Novo evento" />
                                <br/>
                                <Field 
                                    name="slug" 
                                    type="input" 
                                    as={TextField} 
                                    variant="outlined" 
                                    label="Slug"
                                    required
                                    helperText="ex. evento-hot-potato" />
                                <br/>
                                <Field 
                                    name="spotlightRank" 
                                    type="input" 
                                    as={TextField} 
                                    variant="outlined" 
                                    label="Posição em destaque" 
                                    select
                                    helperText="ex. Primeiro">
                                    <MenuItem value="0">Não destacar</MenuItem>
                                    <MenuItem value="1">Primeiro</MenuItem>
                                    <MenuItem value="2">Segundo</MenuItem>
                                    <MenuItem value="3">Terceiro</MenuItem>
                                </Field>
                                <br/>
                                <Field 
                                    name="spotlightTitle" 
                                    type="input" 
                                    as={TextField} 
                                    variant="outlined" 
                                    label="Título em destaque"
                                    helperText="ex. HOT-POTATO" />
                                <br/>
                                <Field 
                                    name="spotlightImage" 
                                    type="input" 
                                    as={TextField} 
                                    variant="outlined" 
                                    label="Imagem em destaque"
                                    helperText="ex. imgur.com/zQIliXh.png" />
                                <br/>
                                <Field 
                                    name="content" 
                                    type="input" 
                                    as={TextField} 
                                    variant="outlined" 
                                    label="Conteúdo"
                                    helperText="ex. Novo evento do servidor!" />
                                <br/>
                                <Button disabled={isSubmitting} type="submit">ADICIONAR</Button>
                            </FormControl>
                        </form>
                        )}
                    </Formik>
                </Box>
            </Box>
        </Box>
    )
}

export default AdminNewAdd