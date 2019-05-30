var express = require('express');
var router = express.Router();
const basicAuth = require('express-basic-auth');

// Require controller modules.
var regular_controller = require('../controllers/regularController');

// Classic Regular Example - GET
router.get('/GET/classic', regular_controller.classic_get);

// Classic Regular Example - POST Form
router.get('/POST/classic', regular_controller.classic_post);
router.post('/POST/classic', regular_controller.classic_post);

// Classic b64 Example - GET
router.get('/GET/classic_b64', regular_controller.classic_b64_get);

// Classic b64 Example - POST Form
router.get('/POST/classic_b64', regular_controller.classic_b64_post);
router.post('/POST/classic_b64', regular_controller.classic_b64_post);

// Classic hex Example - GET
router.get('/GET/classic_hex', regular_controller.classic_hex_get);

// Classic hex Example - POST Form
router.get('/POST/classic_hex', regular_controller.classic_hex_post);
router.post('/POST/classic_hex', regular_controller.classic_hex_post);

// Classic Quote Example - GET
router.get('/GET/classic_quote', regular_controller.classic_quote_get);

// Classic Quote Example - POST Form
router.get('/POST/classic_quote', regular_controller.classic_quote_post);
router.post('/POST/classic_quote', regular_controller.classic_quote_post);

// Classic Double Quote Example - GET
router.get('/GET/classic_double_quote', regular_controller.classic_double_quote_get);

// Classic Double Quote Example - POST Form
router.get('/POST/classic_double_quote', regular_controller.classic_double_quote_post);
router.post('/POST/classic_double_quote', regular_controller.classic_double_quote_post);

// Classic Non Space Example - GET
router.get('/GET/classic_non_space', regular_controller.classic_non_space_get);

// Classic Non Space Example - POST Form
router.get('/POST/classic_non_space', regular_controller.classic_non_space_post);
router.post('/POST/classic_non_space', regular_controller.classic_non_space_post);

// Classic Blacklisting - GET
router.get('/GET/classic_blacklisting', regular_controller.classic_blacklisting_get);

// Classic Blacklisting - POST Form
router.get('/POST/classic_blacklisting', regular_controller.classic_blacklisting_post);
router.post('/POST/classic_blacklisting', regular_controller.classic_blacklisting_post);

// Classic Hashing - GET
router.get('/GET/classic_hash', regular_controller.classic_hash_get);

// Classic Hashing - POST Form
router.get('/POST/classic_hash', regular_controller.classic_hash_post);
router.post('/POST/classic_hash', regular_controller.classic_hash_post);

// Classic Basic Auth - GET
router.get('/GET/classic_basic_auth', basicAuth({users: { 'admin': 'admin' }, unauthorizedResponse: 'Sorry - you need valid credentials to be granted access!', challenge: true}), regular_controller.classic_basic_auth_get);

// Classic Hashing - POST Form
router.get('/POST/classic_basic_auth', basicAuth({users: { 'admin': 'admin' }, unauthorizedResponse: 'Sorry - you need valid credentials to be granted access!', challenge: true}), regular_controller.classic_basic_auth_post);
router.post('/POST/classic_basic_auth', basicAuth({users: { 'admin': 'admin' }, unauthorizedResponse: 'Sorry - you need valid credentials to be granted access!', challenge: true}), regular_controller.classic_basic_auth_post);

// Blind - GET
router.get('/GET/blind', regular_controller.blind_get);

// Blind - POST Form
router.get('/POST/blind', regular_controller.blind_post);
router.post('/POST/blind', regular_controller.blind_post);

// Double Blind - GET
router.get('/GET/double_blind', regular_controller.double_blind_get);

// Double Blind - POST Form
router.get('/POST/double_blind', regular_controller.double_blind_post);
router.post('/POST/double_blind', regular_controller.double_blind_post);

// Eval - GET
router.get('/GET/eval', regular_controller.eval_get);

// Eval - POST Form
router.get('/POST/eval', regular_controller.eval_post);
router.post('/POST/eval', regular_controller.eval_post);

// Eval B64 - GET
router.get('/GET/eval_b64', regular_controller.eval_b64_get);

// Eval B64 - POST Form
router.get('/POST/eval_b64', regular_controller.eval_b64_post);
router.post('/POST/eval_b64', regular_controller.eval_b64_post);

// Classic (SOAP/XML) - POST Form
// router.post('/POST/classic_xml', regular_controller.classic_xml_post);

// // Blind (SOAP/XML) - POST Form
// router.get('/POST/blind_xml', regular_controller.blind_xml_post);
// router.post('/POST/blind_xml', regular_controller.blind_xml_post);

// Classic (JSON) - POST Form
router.get('/POST/classic_json', regular_controller.classic_json_post);
router.post('/POST/classic_json', regular_controller.classic_json_post);

// Blind (JSON) - POST Form
router.get('/POST/blind_json', regular_controller.blind_json_post);
router.post('/POST/blind_json', regular_controller.blind_json_post);

// Eval (JSON) - POST Form
router.get('/POST/eval_json', regular_controller.eval_json_post);
router.post('/POST/eval_json', regular_controller.eval_json_post);

// Preg_match() - GET
router.get('/GET/preg_match', regular_controller.preg_match_get);

// Preg_match() - POST Form
router.get('/POST/preg_match', regular_controller.preg_match_post);
router.post('/POST/preg_match', regular_controller.preg_match_post);

// Preg_match() blind - GET
router.get('/GET/preg_match_blind', regular_controller.preg_match_blind_get);

// Preg_match() blind - POST Form
router.get('/POST/preg_match_blind', regular_controller.preg_match_blind_post);
router.post('/POST/preg_match_blind', regular_controller.preg_match_blind_post);

// // Preg_Replace() - GET
// router.get('/GET/preg_replace\\?replace=/Hello/&with=Bye', regular_controller.preg_replace_get);

// Str_Replace() - GET
router.get('/GET/str_replace', regular_controller.str_replace_get);

// Str_Replace() - POST Form
router.get('/POST/str_replace', regular_controller.str_replace_post);
router.post('/POST/str_replace', regular_controller.str_replace_post);

// Create_Function() - GET
router.get('/GET/create_function', regular_controller.create_function_get);

// Create_Function() - POST Form
router.get('/POST/create_function', regular_controller.create_function_post);
router.post('/POST/create_function', regular_controller.create_function_post);

module.exports = router;