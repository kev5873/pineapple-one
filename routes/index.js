var models  = require('../models');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  models.User.findAll({
    include: [ models.Task ]
  }).then(function(users) {
    res.render('index', {
      title: 'Express',
      users: users
    });
  });
});

router.post('users/create', function(req, res, next) {
  res.render('index');
});

module.exports = router;
