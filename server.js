const express = require('express')
const router = require('./routes/user')
const { log } = require('./middlewares/logger')

const app = express()

app.use(log)
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(router)

app.use((req, res, next) => {
  res.status(404)
  res.send({
    status: 404,
    message: `Resource ${req.originalUrl} not found`,
  })
})

app.listen(8000, () => {
  console.log('server running on http://localhost:8000')
})
