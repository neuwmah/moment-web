export const SET_NEWS = "SET_NEWS"
export const SET_SPOTLIGHT = "SET_SPOTLIGHT"

export const setNews = (news) => ({
    type: SET_NEWS,
    payload: news
})

export const setSpotlightNews = (spotlightNews) => ({
    type: SET_SPOTLIGHT,
    payload: spotlightNews
})