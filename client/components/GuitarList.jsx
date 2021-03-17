import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchGuitars, fetchBrands, fetchTypes } from '../actions'

const GuitarList = (props) => {
  useEffect(() => {
    props.dispatch(fetchGuitars())
    props.dispatch(fetchBrands())
    props.dispatch(fetchTypes())
  }, [])

  return (
    <>
      <div className='guitarList'>
        <h1>Fullstack Boilerplate - with Guitars!</h1>
        <form>
          <h2>Brands</h2>
          {props.brands.map(brand => (
            <label>
              {brand}:
              <input
                name={brand}
                type="checkbox"
              />
              <br />
            </label>
          ))}
          <h2>Types</h2>
          {props.types.map(type => (
            <label>
              {type}:
              <input
                name={type}
                type="checkbox"
              />
              <br />
            </label>
          ))}


        </form>
        <ul>
          {props.guitars.map(guitar => (
            <li key={guitar.id}>{guitar}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

const mapStateToProps = (globalState) => {
  return {
    guitars: globalState.guitars,
    brands: globalState.brands,
    types: globalState.types
  }
}

export default connect(mapStateToProps)(GuitarList)
