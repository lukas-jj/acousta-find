import {SET_WOOD_TOPS } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WOOD_TOPS:
      return action.wood_tops
    default:
      return state
  }
}

export default reducer
