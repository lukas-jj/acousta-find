import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchGuitars, fetchBrands, fetchTypes, fetchFilteredList, fetchWoodTops } from '../actions'
import GuitarCard from "./GuitarCard"

const GuitarList = (props) => {
  useEffect(() => {
    props.dispatch(fetchGuitars())
    props.dispatch(fetchBrands())
    props.dispatch(fetchTypes())
    props.dispatch(fetchWoodTops())

  }, [])

  const [formData, setFormData] = useState({
    brands: [],
    types: [],
    wood_tops: []
  })

  const [all, setAll] = useState({
    brands: false,
    types: false,
    wood_tops: false

  })


  const handleChange = (e) => {
    e.persist()

    if (!formData[e.target.name].includes(e.target.value)) {
      setFormData(prevData => ({ ...prevData, [e.target.name]: [...prevData[e.target.name], e.target.value] }))
    }
    else {
      setFormData(prevData => ({ ...prevData, [e.target.name]: prevData[e.target.name].filter(value => value !== e.target.value) }))
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    props.dispatch(fetchFilteredList(formData))

  }
  const handleCheckAll = (e) => {
    e.persist()
    setAll(prevData => ({ ...prevData, [e.target.name]: !prevData[e.target.name] }))
    if (e.target.checked) {
      let typesLength = props[e.target.name].length
      let newArr = []
      for (let i = 1; i < typesLength + 1; i++) {
        console.log(i)
        newArr.push(i)
      }
      setFormData(prevData => ({ ...prevData, [e.target.name]: newArr }))
    }
    else {
      setFormData(prevData => ({ ...prevData, [e.target.name]: [] }))
    }
  }


  return (
    <>

<h1 className="title">Acoustic Guitar Search</h1>

      <div id="search" className="columns">
        <div className="column is-narrow">
          <div className="box" width="200px">

            <form onSubmit={handleSubmit}  >

              <div className="box">
                <div className="box-content">
                  <h3 className="subtitle">
                    Choose Brands
</h3>
                  <label >
                    All Brands:
<input type="checkbox" name='brands' onClick={handleCheckAll} />
                  </label>
                  {!all.brands ?
                    <div>
                      {props.brands.map(brand => (
                        <label key={brand.id}>
                          {brand.brand}:
                          <input
                            name='brands'
                            type="checkbox"
                            onChange={handleChange}
                            value={brand.id}
                          />
                          <br />
                        </label>
                      ))}
                    </div> :
                    <div>
                      <h3>All Brands</h3>
                    </div>}

                </div>
              </div>
              <br />

              <div className="box">
                <div className="box-content">

                  <h3 className="subtitle">
                    Choose Types
</h3>
                  <label >
                    All Types:
<input name='types' type="checkbox" onClick={handleCheckAll} />
                  </label>
                  <br />
                  {!all.types ?
                    <div>
                      {props.types.map(type => (
                        <label key={type.id}>
                          {type.type}:
                          <input
                            name='types'
                            type="checkbox"
                            onChange={handleChange}
                            value={type.id}
                          />
                          <br />
                        </label>
                      ))}
                    </div> :
                    <div>
                      <h3>All Types</h3>
                    </div>}
                </div>
              </div>
              <br />

              <div className="box">
                <div className="box-content">

                  <h3 className="subtitle">
                    Choose Wood Tops
</h3>
                  <label >
                    All Wood Tops:
<input name='wood_tops' type="checkbox" onClick={handleCheckAll} />
                  </label>
                  <br />
                  {!all.wood_tops ?
                    <div>
                      {props.wood_tops.map(wood_top => (
                        <label key={wood_top.id}>
                          {wood_top.wood_top}:
                          <input
                            name='wood_tops'
                            type="checkbox"
                            onChange={handleChange}
                            value={wood_top.id}
                          />
                          <br />
                        </label>
                      ))}
                    </div> :
                    <div>
                      <h3>All Wood Tops</h3>
                    </div>}
                </div>
              </div>
              <br />

              <input type="submit" />
            </form>


          </div>
        </div>
        <div className="column is-multiline">
        <div className="columns is-multiline">

              {/* needs guitar card component */}


              {props.list.list && props.list.list.map(list => (
                  <GuitarCard info={list} />
            
              ))
              }

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

export default connect(mapStateToProps)(GuitarList)
