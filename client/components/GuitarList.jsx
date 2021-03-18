import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchGuitars, fetchBrands, fetchTypes } from '../actions'

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
    console.log(!formData.brands.includes(e.target.value))
    if (!formData.brands.includes(e.target.value)) {
      setFormData(prevData=> ({...prevData, brands: [...prevData.brands, e.target.value] }))
    }
    else {
      setFormData(prevData=> ({...prevData, brands: prevData.brands.filter(brand=> brand !== e.target.value) }))

    }
  }


  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   let {
  //     brand,
  //     types
  //   } = formData
  // }

  return (
    <>
    {formData.brands.map(brand => <h1>{brand}</h1>)}
      <div className='guitarList'>
        <h1>Fullstack Boilerplate - with Guitars!</h1>
        <form  >
          <h2>Brands</h2>
          {props.brands.map(brand => (
            <label key={brand.id}>
              {brand}:
              <input
                name={brand}
                type="checkbox"
                onChange={handleChange}
                value={brand}
              />
              <br />
            </label>
          ))}
          <h2>Types</h2>
          {props.types.map(type => (
            <label key={type.id}>
              {type}:
              <input
                key={type.id}
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
