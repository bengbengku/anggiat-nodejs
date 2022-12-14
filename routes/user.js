const router = require('express').Router()
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

router.get('/', (req, res) => {
  res.send({
    status: 'Success',
    message: 'Welcome to homepage',
    statusCode: 200,
  })
})
router.get('/post/:id', (req, res) => {
  const { id } = req.params
  const { page, total } = req.query
  res.json({ id, page, total })
})
router.get('/foods', (req, res) => {
  res.json({
    chineseFood: 'Mie Tiaw',
    indonesianFood: 'Nasi Goreng',
  })
})
router.post('/product/', upload.single('image'), (req, res) => {
  const { name, price } = req.body
  const image = req.file
  res.json({
    name,
    price,
    image,
  })
})

module.exports = router
