import { combineReducers } from 'redux'

import guitars from './guitars'
import brands from './brands'
import types from './types'
import list from './list'
import wood_tops from './wood_tops'


export default combineReducers({
  guitars,
  brands,
  types,
  list,
  wood_tops
})
