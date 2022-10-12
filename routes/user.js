const router = require('express').Router()

router.get('/', (req, res) => {
  res.send({
    status: 'Success',
    message: 'Welcome to homepage',
    statusCode: 200,
  })
})
router.get('/post/:id', (req, res) => {
  const { id } = req.params
  console.log(req.query)
  const { page, total } = req.query
  res.json({ id, page, total })
})
router.post('/product', (req, res) => {
  res.json(req.body)
})

module.exports = router
