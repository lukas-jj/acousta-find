import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'


const guitarCard = (props) => {

    console.log(props.info)


  return (
    <>
           <div className="column is-one-third">
            <div className="card">
                    <img className="card-image" src={props.info.image} alt="Oh nuts, no image!"></img>
                <div className="card-content">
                <p className="card-header-title">{props.info.name}</p>
                  Brand: {props.info.brand} <br/>
                  Top Wood: {props.info.wood_top}<br/>
                  Neck Width: {props.info.neck_width}
                </div>
              </div>
            </div>
</>
  )
}

const mapStateToProps = (globalState) => {
  return {
    guitars: globalState.guitars,
    brands: globalState.brands,
    types: globalState.types,
    list: globalState.list,
    wood_tops: globalState.wood_tops
  }
}

export default connect(mapStateToProps)(guitarCard)
