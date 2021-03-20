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

  const handleChange = (e) => {
    e.persist()
    if (!formData.brands.includes(e.target.value)) {
      setFormData(prevData => ({ ...prevData, brands: [...prevData.brands, e.target.value] }))
    }
    else {
      setFormData(prevData => ({ ...prevData, brands: prevData.brands.filter(brand => brand !== e.target.value) }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.dispatch(fetchFilteredList(formData))
  }

  return (
    <>
      {formData.brands.map(brand => <h1>{brand}</h1>)}
      <div className='guitarList'>
        <h1>Fullstack Boilerplate - with Guitars!</h1>
        <form onSubmit={handleSubmit}  >
          <h2>Brands</h2>
          {props.brands.map(brand => (
            <label key={brand.id}>
              {brand.brand}:
              <input
                name={brand}
                type="checkbox"
                onChange={handleChange}
                value={brand.id}
              />
              <br />
            </label>
          ))}
          <h2>Types</h2>
          {props.types.map(type => (
            <label key={type.id}>
              {type}:
              <input
                name={type}
                type="checkbox"
              />
              <br />
            </label>
          ))}
          <input type="submit" value="Submit" />

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
