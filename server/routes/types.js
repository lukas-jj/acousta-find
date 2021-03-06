const express = require('express')

const db = require('../db/guitars')

const router = express.Router()

router.get('/', (req, res) => {

  db.getTypes()
    .then(results => {
        res.json({types: results })
        return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})



module.exports = router
