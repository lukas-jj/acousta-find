import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import GuitarList from './GuitarList'

const App = (props) => {

  return (

      <div className='app'>
          <GuitarList/>
      </div>

  )
}
const mapStateToProps = (globalState) => {
  return {
    guitars: globalState.guitars
  }
}

export default connect(mapStateToProps)(App)
