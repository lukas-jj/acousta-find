import {SET_BRANDS } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BRANDS:
      return action.brands
    default:
      return state
  }
}

export default reducer
