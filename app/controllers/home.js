var express = require('express'),
  router = express.Router(),
  Markov = require('../models/markov');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  res.render('home', {
    title: 'Clippy',
    markov: new Markov()
  });
});
