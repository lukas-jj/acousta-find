import {SET_SOLID_TOPS } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SOLID_TOPS:
      return action.solid_tops
    default:
      return state
  }
}

export default reducer
