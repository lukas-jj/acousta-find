import { getGuitars } from '../apis/guitars'
import { getBrands } from '../apis/brands'

export const SET_GUITARS = 'SET_GUITARS'
export const SET_BRANDS = 'SET_BRANDS'


export function setGuitars (guitars) {
  return {
    type: SET_GUITARS,
    guitars
  }
}

export function setBrands (brands) {
  return {
    type: SET_BRANDS,
    brands
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

export function fetchBrands () {
  return dispatch => {
    return getBrands()
      .then(brands => {
        dispatch(setBrands(brands))
        return null
      })
  }
}
