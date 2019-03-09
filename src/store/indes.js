import {
  createStore,
  applyMiddleware
} from 'redux'

// Logger with default options
import logger from 'redux-logger'

import { 
  composeWithDevTools 
} from 'redux-devtools-extension'

import ReduxThunk from 'redux-thunk' // no changes here ðŸ˜€
import reducers from '../reducers/index'

// My logger
const logger_ = ({ getState, dispatch }) => (next) => (action) => {
  const value = next(action)
  return value
}

const store = createStore(
  reducers,
  {}, // default state of the application
  composeWithDevTools(
    applyMiddleware(
      logger,
      logger_,
      ReduxThunk
    )
  )
)

export default store;