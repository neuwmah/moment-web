import axios from 'axios'

const server = axios.create({
    baseURL: 'http://localhost:3030/'
})
const mcstatus = axios.create({
    baseURL: 'https://mcstatus.snowdev.com.br/api/query/jogar.momentcraft.com.br'
})

export default{
    server,
    mcstatus
}