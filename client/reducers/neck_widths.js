import {SET_NECK_WIDTHS } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NECK_WIDTHS:
      return action.neck_widths
    default:
      return state
  }
}


export default reducer
