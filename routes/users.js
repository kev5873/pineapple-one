var models  = require('../models');
var express = require('express');
var router = express.Router();

router.post('/create', function(req, res, next) {
  console.log(res);
  res.render('nice');
});

module.exports = router;
