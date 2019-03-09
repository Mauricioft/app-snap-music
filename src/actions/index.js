import {
  SEARCH_ARTIST,
} from '../action-types/index'

import artistSrvc from '../services/artistSrvc'

const setArtists = (query) => {
  return {
    type: SEARCH_ARTIST,
    payload: {
      query
    }
  }
}

export const searchArtists = (query) => {
  return async (dispatch) => {
    try {
      const data = await artistSrvc.searchArtist(query.toLowerCase())
      dispatch(
        setArtists(data.artists),
      )
      return data;
    } catch (error) {
      console.log(error)
    }
  }
  
}