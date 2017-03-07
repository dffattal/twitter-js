const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res, next) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
  next()
});

// router.get('/stylesheets/style.css', function(req, res){
//   res.sendFile('style.css', {root: path.join(__dirname, '../public/stylesheets')})
// })

module.exports = router;
