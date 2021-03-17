import { combineReducers } from 'redux'

import guitars from './guitars'
import brands from './brands'
import types from './types'

export default combineReducers({
  guitars,
  brands,
  types
})
