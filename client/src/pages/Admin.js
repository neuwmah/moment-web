import React, { useState, useEffect } from 'react'
import api from '../services/api' 
import AdminNavbar from '../components/AdminNavbar'
import AdminIndex from '../components/AdminIndex'
import AdminNewAdd from '../components/AdminNewAdd'
import AdminNewEdit from '../components/AdminNewEdit'
import AdminNewRemove from '../components/AdminNewRemove'

function Admin() {
    const [ router, setRouter ] = useState(0)
    const [ users, setUsers ] = useState()

    async function getUsers(){
        try {
            const loadedUsers = await api.server.get('/admin/usuarios')
            const { data } = loadedUsers
            setUsers(data.data)
        } catch(e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <>
        <AdminNavbar setRouter={setRouter} />
        { router === 0 && <AdminIndex /> }
        { router === 1 && <AdminNewAdd users={users} /> }
        { router === 2 && <AdminNewEdit /> }
        { router === 3 && <AdminNewRemove /> }
        </>
    )
}

export default Admin
