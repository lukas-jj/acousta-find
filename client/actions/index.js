import { getGuitars } from '../apis/guitars'

export const SET_GUITARS = 'SET_GUITARS'

export function setGuitars (guitars) {
  return {
    type: SET_GUITARS,
    guitars
  }
}

export function fetchGuitars () {
  return dispatch => {
    return getGuitars()
      .then(guitars => {
        dispatch(setGuitars(guitars))
        return null
      })
  }
}
