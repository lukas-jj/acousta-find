const express = require('express')

const db = require('../db/guitars')

const router = express.Router()

router.get('/', (req, res) => {

  db.getWoodTops()
    .then(results => {
        res.json({wood_tops: results })
        return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

module.exports = router
