const express = require('express')
const path = require('path')

const guitarRoutes = require('./routes/guitars')
const brandRoutes = require('./routes/brands')
const typeRoutes = require('./routes/types')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/guitars', guitarRoutes)
server.use('/api/v1/brands', brandRoutes)
server.use('/api/v1/types', typeRoutes)

module.exports = server
