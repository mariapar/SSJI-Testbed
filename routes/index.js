var express = require('express');
var router = express.Router();

// Require controller modules.
var main_controller = require('../controllers/mainController');

// GET home page.
router.get('/', function(req, res) {
  res.redirect('/index');
});

router.get('/index', main_controller.index);

module.exports = router;
