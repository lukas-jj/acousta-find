import {SET_LIST } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIST:
      return action.list
    default:
      return state
  }
}

export default reducer
