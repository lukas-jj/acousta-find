import {SET_GUITARS } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GUITARS:
      return action.guitars
    default:
      return state
  }
}

export default reducer
