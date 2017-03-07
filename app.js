const express = require('express');
const app = express();

app.listen(3000, function () {
  console.log('server listening on port 3000')
})

app.use(function (request, response, next) {
  console.log(request.method, request.url)
  next()
})

app.get('/special/**', function (request, response) {
  response.send('you reached the special area.')
})

app.get('/**', function (request, response) {

  response.send('test123')
})

app.post('/**', function (request, response) {

  response.send('test123')
})

app.put('/**', function (request, response) {

  response.send('test123')
})
