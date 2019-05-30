var express = require('express');
var router = express.Router();

// Require controller modules.
var cookie_controller = require('../controllers/cookieController');

// Classic Cookie Example
router.get("/cookie\\(classic\\)", cookie_controller.classic_get);

router.get("/cookie\\(b64\\)", cookie_controller.b64_get);

router.get("/cookie\\(blind\\)", cookie_controller.blind_get);

router.get("/cookie\\(eval\\)", cookie_controller.eval_get);

module.exports = router;
