import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchGuitars, fetchBrands } from '../actions'

const GuitarList = (props) => {
  useEffect(() => {
    props.dispatch(fetchGuitars())
    props.dispatch(fetchBrands())
  }, [])

  return (
    <>
      <div className='guitarList'>
        <h1>Fullstack Boilerplate - with Guitars!</h1>
        <form>
          {props.brands.map(brand => (
            <label>
              {brand}:
              <input
                name="isGoing"
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
    brands: globalState.brands
  }
}

export default connect(mapStateToProps)(GuitarList)
