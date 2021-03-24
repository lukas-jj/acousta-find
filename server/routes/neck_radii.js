const express = require('express')

const db = require('../db/guitars')

const router = express.Router()

router.get('/', (req, res) => {

  db.getNeckRadii()
    .then(results => {
        res.json({neck_radii: results })
        return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

module.exports = router
