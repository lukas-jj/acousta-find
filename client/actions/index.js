import { getGuitars } from '../apis/guitars'
import { getBrands } from '../apis/brands'
import { getTypes } from '../apis/types'

export const SET_GUITARS = 'SET_GUITARS'
export const SET_BRANDS = 'SET_BRANDS'
export const SET_TYPES = 'SET_TYPES'


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

export function setTypes (types) {
  return {
    type: SET_TYPES,
    types
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

export function fetchTypes () {
  return dispatch => {
    return getTypes()
      .then(types => {
        dispatch(setTypes(types))
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
