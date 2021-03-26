const express = require('express')
const path = require('path')

const guitarRoutes = require('./routes/guitars')
const brandRoutes = require('./routes/brands')
const typeRoutes = require('./routes/types')
const woodTopRoutes = require('./routes/wood_tops')
const neckWidthRoutes = require ('./routes/neck_widths')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/guitars', guitarRoutes)
server.use('/api/v1/brands', brandRoutes)
server.use('/api/v1/types', typeRoutes)
server.use('/api/v1/wood_tops', woodTopRoutes)
server.use('/api/v1/neck_widths', neckWidthRoutes)

module.exports = server
