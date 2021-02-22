const express = require('express')
const path = require('path')

const guitarRoutes = require('./routes/guitars')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/guitars', guitarRoutes)

module.exports = server
