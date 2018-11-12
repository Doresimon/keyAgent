var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('hello?');
  // res.render('index', { title: 'Express' });
});

router.post('/signup', function(req, res, next) {
  console.log(req.body)
  res.send('signup~~');
  // res.render('index', { title: 'Express' });
});

router.post('/login', function(req, res, next) {
  console.log(req.body)
  res.send('login~~');
  // res.render('index', { title: 'Express' });
});

module.exports = router;
