import { getGuitars, getList } from '../apis/guitars'
import { getBrands } from '../apis/brands'
import { getTypes } from '../apis/types'
import { getWoodTops } from '../apis/wood_tops'
import { getNeckWidths } from '../apis/neck_widths'


export const SET_GUITARS = 'SET_GUITARS'
export const SET_BRANDS = 'SET_BRANDS'
export const SET_TYPES = 'SET_TYPES'
export const SET_LIST = 'SET_LIST'
export const SET_WOOD_TOPS = 'SET_WOOD_TOPS'
export const SET_NECK_WIDTHS = 'SET_NECK_WIDTHS'

export function setNeckWidths (neck_widths) {
  return {
    type: SET_NECK_WIDTHS,
    neck_widths
  }
}

export function setWoodTops (wood_tops) {
  return {
    type: SET_WOOD_TOPS,
    wood_tops
  }
}

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

export function setList (list) {
  return {
    type: SET_LIST,
    list
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

export function fetchNeckWidth () {
  return dispatch => {
    return getNeckWidths()
      .then(neck_widths => {
        dispatch(setNeckWidths(neck_widths))
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

export function fetchWoodTops () {
  return dispatch => {
    return getWoodTops()
      .then(wood_tops => {
        dispatch(setWoodTops(wood_tops))
        return null
      })
  }
}

export function fetchFilteredList (formData) {
  return dispatch => {
    return getList(formData)
      .then(list => {
        dispatch(setList(list))
        return null
      })
  }
}