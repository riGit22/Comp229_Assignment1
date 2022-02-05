var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET rudy page. */
router.get('/rudy', function(req, res, next) {
  res.render('users', { 
    title: 'Users',
    name:  'Rudy'
  });
});



module.exports = router;