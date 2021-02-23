import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchGuitars } from '../actions'

const GuitarList = (props) => {
  useEffect(() => {
    props.dispatch(fetchGuitars())
  })

  return (
    <>
      <div className='guitarList'>
        <h1>Fullstack Boilerplate - with Guitars!</h1>
        <ul>
          {props.guitars.map(guitar => (
            <li key={guitar}>{guitar}</li>
          ))}
        </ul>
      </div>
    </>
  )
}
const mapStateToProps = (globalState) => {
  return {
    guitars: globalState.guitars
  }
}

export default connect(mapStateToProps)(GuitarList)
