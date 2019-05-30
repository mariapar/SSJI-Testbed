var express = require('express');
var router = express.Router();

// Require controller modules.
var agent_controller = require('../controllers/userAgentController');

router.get("/ua\\(classic\\)", agent_controller.classic_get);

router.get("/ua\\(blind\\)", agent_controller.blind_get);

router.get("/ua\\(eval\\)", agent_controller.eval_get);

module.exports = router;
