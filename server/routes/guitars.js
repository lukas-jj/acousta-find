const express = require('express')

const db = require('../db/guitars')

const router = express.Router()

router.get('/', (req, res) => {
  db.getGuitars()
    .then(results => {
      res.json({ guitars: results.map(guitar => guitar.name) })
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

router.post('/', (req, res) => {

  db.getFilteredList(req.body)
    .then(results => {
      res.json({ list: results })
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

module.exports = router
