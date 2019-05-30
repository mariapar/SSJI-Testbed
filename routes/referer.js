var express = require('express');
var router = express.Router();

// Require controller modules.
var referer_controller = require('../controllers/refererController');

router.get("/referer\\(classic\\)", referer_controller.classic_get);

router.get("/referer\\(blind\\)", referer_controller.blind_get);

router.get("/referer\\(eval\\)", referer_controller.eval_get);

module.exports = router;
