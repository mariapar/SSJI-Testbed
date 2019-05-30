var express = require('express');
var router = express.Router();

// Require controller modules.
var filter_controller = require('../controllers/filterController');

router.get("/lax_domain_name", filter_controller.lax_domain_name);
router.post("/lax_domain_name", filter_controller.lax_domain_name);

router.get("/nested_quotes", filter_controller.nested_quotes);
router.post("/nested_quotes", filter_controller.nested_quotes);

router.get("/no_colon_no_pipe_no_ampersand_no_dollar", filter_controller.no_colon_no_pipe_no_ampersand_no_dollar);
router.post("/no_colon_no_pipe_no_ampersand_no_dollar", filter_controller.no_colon_no_pipe_no_ampersand_no_dollar);

router.get("/no_space_no_colon_no_pipe_no_ampersand", filter_controller.no_space_no_colon_no_pipe_no_ampersand);
router.post("/no_space_no_colon_no_pipe_no_ampersand", filter_controller.no_space_no_colon_no_pipe_no_ampersand);

router.get("/no_space_no_colon_no_pipe_no_ampersand_no_dollar", filter_controller.no_space_no_colon_no_pipe_no_ampersand_no_dollar);
router.post("/no_space_no_colon_no_pipe_no_ampersand_no_dollar", filter_controller.no_space_no_colon_no_pipe_no_ampersand_no_dollar);

router.get("/no_space", filter_controller.no_space);
router.post("/no_space", filter_controller.no_space);

router.get("/no_white_chars", filter_controller.no_white_chars);
router.post("/no_white_chars", filter_controller.no_white_chars);

router.get("/no_white_chars_start_alphanum", filter_controller.no_white_chars_start_alphanum);
router.post("/no_white_chars_start_alphanum", filter_controller.no_white_chars_start_alphanum);

router.get("/no_white_chars_stop_alnum", filter_controller.no_white_chars_stop_alnum);
router.post("/no_white_chars_stop_alnum", filter_controller.no_white_chars_stop_alnum);

router.get("/simple_start_alphanum", filter_controller.simple_start_alphanum);
router.post("/simple_start_alphanum", filter_controller.simple_start_alphanum);

router.get("/simple_stop_alphanum", filter_controller.simple_stop_alphanum);
router.post("/simple_stop_alphanum", filter_controller.simple_stop_alphanum);

router.get("/multiple_os_commands_blacklisting", filter_controller.multiple_os_commands_blacklisting);
router.post("/multiple_os_commands_blacklisting", filter_controller.multiple_os_commands_blacklisting);

module.exports = router;
