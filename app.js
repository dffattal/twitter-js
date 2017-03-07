const express = require('express');
const nunjucks = require('nunjucks')
const app = express();

app.engine('html', nunjucks.render)
app.set('view engine', 'html')
nunjucks.configure('views', {noCache: true})
//var temp = nunjucks.render('index.html', {title: "An Example", people: [{name: 'Gandalf'}, {name: 'Frodo'}, {name: 'Hermione'}]})
const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];

app.listen(3000, function () {
  console.log('server listening on port 3000')
  //console.log(temp)
})

app.use(function (request, response, next) {
  console.log(request.method, request.url)
  next()
})

app.get('/special/**', function (request, response) {
  response.send('you reached the special area.')
})

app.get('/**', function (request, response) {
  response.render('index', {title: 'Hall of Fame', people: people})
  //response.send('test123')
})

app.post('/**', function (request, response) {

  response.send('test123')
})

app.put('/**', function (request, response) {

  response.send('test123')
})
