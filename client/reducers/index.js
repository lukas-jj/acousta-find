import { combineReducers } from 'redux'

import guitars from './guitars'
import brands from './brands'
import types from './types'
import list from './list'


export default combineReducers({
  guitars,
  brands,
  types,
  list
})
