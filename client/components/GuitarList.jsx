import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchGuitars, fetchBrands, fetchTypes, fetchFilteredList } from '../actions'

const GuitarList = (props) => {
  useEffect(() => {
    props.dispatch(fetchGuitars())
    props.dispatch(fetchBrands())
    props.dispatch(fetchTypes())
  }, [])


console.log("props.list", props.list.list)
console.log("props.brands", props.brands)

  const [formData, setFormData] = useState({
    brands: [],
    types: []
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

  return (
    <>
      <div className='guitarList'>
        <h1>Fullstack Boilerplate - with Guitars!</h1>
        <form onSubmit={handleSubmit}  >
          <h2>Brands</h2>
          {props.brands.map(brand => (
            <label key={brand.id}>
              {brand.brand}:
              <input
                name={'brands'}
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
              {type.type}:
              <input
                name={'types'}
                type="checkbox"
                onChange={handleChange}
                value={type.id}
              />
              <br />
            </label>
          ))}
          <input type="submit" value="Submit" />

        </form>
        <ul>
          
          {props.list.list && props.list.list.map(list => (
            <li key={list.id}>
             <p> Name: {list.name}</p><br/>
             <p> Brand: {list.brand}</p><br/>
             <p> Type: {list.type}</p><br/>

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
    list: globalState.list
  }
}

export default connect(mapStateToProps)(GuitarList)
