const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');
const bodyParser = require('body-parser')

module.exports = function(io){

  router.use(bodyParser.urlencoded({extended: false}))

  router.use(bodyParser.json())

  router.get('/users/:name', function(req, res) {
    var name = req.params.name;
    // console.log(req.params)
    var list = tweetBank.find( {name: name} );
    res.render( 'index', { tweets: list, showForm: true, inUsersList: true, name: name} );
  });

  router.get('/tweets/:id', function(req, res) {
    var id = Number(req.params.id);
    console.log(req.params)
    var list = tweetBank.find( {id: id} );
    res.render( 'index', { tweets: list} );
  });

  router.get('/', function (req, res, next) {
    let tweets = tweetBank.list();
    res.render( 'index', { tweets: tweets, showForm: true } );
    next()
  });

  router.post('/tweets', function (req, res, next) {
    // console.log(req.body)
    var name = req.body.name
    var text = req.body.text
    tweetBank.add(name, text)
    io.sockets.emit('newTweet', { name: name, content: text});
    res.redirect('/')
  })

  return router
}
// router.get('/stylesheets/style.css', function(req, res){
//   res.sendFile('style.css', {root: path.join(__dirname, '../public/stylesheets')})
// })

//module.exports = router;
