var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'MVC', subtitle: 'Prática sobre MVC, Express, Express-Generator, Node e EJS ' });
});

module.exports = router;
