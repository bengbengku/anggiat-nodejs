const http = require('http')
const { request } = require('https')
const moment = require('moment')

const server = http.createServer((req, res) => {
  switch (req.url) {
    case '/':
      homepage(res)
      break
    case '/welcome':
      welcome(res)
      break
    default:
      notfound(res)
      break
  }
})

const welcome = (res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.write(
    JSON.stringify({
      status: 'successfully created',
      message: 'Welcome to MERN class Eduworks',
      loginAt: moment().format('YYYY-MM-DD'),
    })
  )
  res.end()
}
const notfound = (res) => {
  res.statusCode = 404
  res.setHeader('Content-Type', 'application/json')
  res.write(
    JSON.stringify({
      status: 'Not found',
      message: '404 - Not Found!',
    })
  )
  res.end()
}
const homepage = (res) => {
  res.end('<h1>Welcome to home page</h1>')
}

server.listen(8000, () => {
  console.log('Server listening on port 8000')
})
