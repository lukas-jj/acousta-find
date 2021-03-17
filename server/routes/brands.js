const express = require('express')

const db = require('../db/guitars')

const router = express.Router()


router.get('/', (req, res) => {
  db.getBrands()
    .then(results => {
      res.json({ brands: results.map(brand => brand.brand) })
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})


module.exports = router
