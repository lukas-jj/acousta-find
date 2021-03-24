import {SET_NECK_RADII } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NECK_RADII:
      return action.neck_radii
    default:
      return state
  }
}


export default reducer
