import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchGuitars, fetchBrands, fetchTypes, fetchFilteredList } from '../actions'

const GuitarList = (props) => {
  useEffect(() => {
    props.dispatch(fetchGuitars())
    props.dispatch(fetchBrands())
    props.dispatch(fetchTypes())
  }, [])



  const [formData, setFormData] = useState({
    brands: [],
    types: []
  })

  const [allBrands, setAllBrands] = useState(false)
  const [allTypes, setAllTypes] = useState(false)

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

  const handleType = (e) => {
    setAllTypes(!allTypes)
  }

  const handleBrand = (e) => {
    setAllBrands(!allBrands)
  }




  return (
    <>
      <div className='guitarList'>
        <h1>Acoustic Guitar Search</h1>
        <form onSubmit={handleSubmit}  >
          <h2>Brands</h2>
              <h3>
                Choose Brands
      </h3>
              <label >
                All Brands:
          <input type="checkbox" name='brands' onClick={handleBrand} />
              </label>
          {!allBrands ?
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
            </div>
          }
          <h2>Types</h2>

<h3>
                Choose Type
      </h3>
          <label >
            All Types:
          <input name='types' type="checkbox" onClick={handleType} />
          </label>
          <br />
          {!allTypes ?
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
<input type="submit"/> 
        </form>
        <ul>

          {props.list.list && props.list.list.map(list => (
            <li key={list.id}>
              <p> Name: {list.name}</p><br />
              <p> Brand: {list.brand}</p><br />
              <p> Type: {list.type}</p><br />

            </li>
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
    types: globalState.types,
    list: globalState.list,
    solid_top: globalState.solid_top
  }
}

export default connect(mapStateToProps)(GuitarList)
