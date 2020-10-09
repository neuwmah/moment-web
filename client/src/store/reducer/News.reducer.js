import { SET_NEWS, SET_SPOTLIGHT, setNews, setSpotlightNews } from "../actions/News.actions"
import api from '../../services/api'

const INITIAL_STATE = {
    news: [],
    spotlightNews: []
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case SET_NEWS:
            return {...state, news: action.payload}
        case SET_SPOTLIGHT:
            return {...state, spotlightNews: action.payload}

        default:
            return state
    }
}

export const loadNews = () => async (dispatch) => {
    try {
        const loadedNews = await api.server.get('/')
        const { data } = loadedNews
        dispatch(setNews(data.data))
    } catch(e) {
        console.log(e)
    }
}

export const loadSpotlightNews = () => async (dispatch) => {
    try {
        const loadedNews = await api.server.get('/')
        const { data } = loadedNews
        dispatch(setSpotlightNews(data.data))
    } catch(e) {
        console.log(e)
    }
}