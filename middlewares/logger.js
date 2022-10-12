exports.log = (req, res, next) => {
  console.log(
    new Date().toLocaleDateString(),
    '=>',
    req.method,
    req.originalUrl
  )
  next()
}
