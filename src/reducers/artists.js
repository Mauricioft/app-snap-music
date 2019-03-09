import { 
  SEARCH_ARTIST 
} from '../action-types/index';

const initialState = {
  items: [],
}

const artists = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_ARTIST: {
      let results = [];
      if (action.payload.query.items) {
        results = action.payload.query.items
      }
      return {
        ...state,
        items: results,
      }
    }
    default:
      return state
  }
}

export default artists