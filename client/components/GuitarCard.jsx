import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'


const guitarCard = (props) => {

    console.log(props.info)


  return (
    <>
           
            <div className="card">
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                      {/* <img :src="card.avatar" alt="Image"> */}
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4 no-padding">{props.info.name}</p>
                  </div>
                </div>
                <div className="content">
                  Brand: {props.info.brand} <br/>
                  Top Wood: {props.info.wood_top}
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
