import { SET_USERS, setUsers } from "../actions/Users.actions"
import api from '../../services/api'

const INITIAL_STATE = {
    users: []
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case SET_USERS:
            return {...state, users: action.payload}

        default:
            return state
    }
}

export const loadUsers = () => async (dispatch) => {
    try {
        const loadedUsers = await api.server.get('/admin/usuarios')
        const { data } = loadedUsers
        dispatch(setUsers(data.data))
    } catch(e) {
        console.log(e)
    }
}