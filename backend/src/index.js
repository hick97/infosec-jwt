const app = require('./server')

const port = process.env.PORT || '3001'

app.listen(port, (err) => {
  if (err) {
    console.log('Error')
  } else {
    console.log('Server is running on port 3001...')
  }
})
