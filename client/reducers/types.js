import {SET_TYPES } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TYPES:
      return action.types
    default:
      return state
  }
}

export default reducer
