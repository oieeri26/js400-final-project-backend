const { NODE_ENV, PORT } = process.env
const express = require('express')
const morgan = require('morgan')
const app = express()

// Database Connection
require('./db/connection')()

if (NODE_ENV === 'development') app.use(morgan('dev'))
app.use(require('body-parser').json())

// Attach token to request
app.use(require('./api/middleware/set-token'))

// CORS Access - needs to come before routes!
app.use(require('cors')({ 
    origin: 'http://localhost:3000', 
    optionsSuccessStatus: 200
   }))

// Routes
app.use('/api', require('./api/routes/auth'))
app.use('/api', require('./api/routes/students'))
// app.use('/api', require('./api/routes/admins'))

// Not Found Handler
app.use((req, res, next) => {
    const error = new Error(`Could not ${req.method} ${req.path}`)
    error.status = 404
    next(error)
  })
  
  // Error Handler
  app.use((err, req, res, next) => {
    if (NODE_ENV === 'development') console.error(err)
    const { message, status } = err
    res.status(status).json({ status, message })
  })

// Open Connection
const listener = () => console.log("The server is working! :)")
app.listen(PORT, listener)

