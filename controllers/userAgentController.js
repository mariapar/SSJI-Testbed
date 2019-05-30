
var async = require('async');
var os = require('os');
var exec = require('child_process').exec;
var child;

function execute_cmd(res, some_cmd, template_name, template_title) {
    
    var exec_res = 'Failed to Run...';

    child = exec(some_cmd,
        function (error, stdout, stderr) {
            if (error) {
                console.log(template_title + ' exec error: ' + error);
                return res.render(template_name, { title: template_title, exec_res: some_cmd });
            }

            console.log('stdout: |' + stdout + '|');
            console.log('stderr: |' + stderr + '|');

            return res.render(template_name, { title: template_title, exec_res: stdout });

        });
}

function execute_cmd_and_complain(res, some_cmd, template_name, template_title) {
    
    var exec_res = 'Failed to Run...';

    child = exec(some_cmd,
        function (error, stdout, stderr) {
            if (error) {
                console.log(template_title + ' exec error: ' + error);
                return res.render(template_name, { title: template_title, exec_res: "Please, download Mozilla Firefox!" });
            }

            console.log('stdout: |' + stdout + '|');
            console.log('stderr: |' + stderr + '|');

            return res.render(template_name, { title: template_title, exec_res: "Viva La Mozilla Firefox!" });

        });
}

exports.classic_get = function(req, res, next) {
  var user_agent = req.headers['user-agent'];

  console.log('User-Agent: ' + req.headers['user-agent']);

  if (user_agent !== undefined) {
    some_cmd = "echo '" + user_agent + "'";
    console.log("Will send command: " + some_cmd);
    return execute_cmd(res, some_cmd, 'cookie_classic', 'User-Agent Classic');
  } else {
    return res.render('cookie_classic', { title: 'User-Agent Classic', exec_res: 'Failed to get User Agent!' });
  }

};

exports.blind_get = function(req, res, next) {

  var user_agent = req.headers['user-agent'];

  console.log('User-Agent: ' + req.headers['user-agent']);

  if (user_agent !== undefined) {

    if (os.type().includes('Windows NT')) {
      return res.render('cookie_classic', { title: 'User-Agent Blind', exec_res: 'Invalid operating system.' });
    } else {
      var some_cmd = "echo '" + user_agent + "' | grep Firefox";
      console.log("Will send command: " + some_cmd);
      return execute_cmd_and_complain(res, some_cmd, 'cookie_classic', 'User-Agent Blind');
    }
  }

  return res.render('cookie_classic', { title: 'User-Agent Blind', exec_res: 'Failed to get User Agent!' });

};

exports.eval_get = function(req, res, next) {

  var user_agent = req.headers['user-agent'];

  console.log('User-Agent: ' + req.headers['user-agent']);

  if (user_agent !== undefined) {
    var some_res = eval("'" + user_agent + "';");
    console.log('Eval returned: ' + some_res);
    return res.render('cookie_classic', { title: 'User-Agent Eval', exec_res: some_res });
  }

  return res.render('cookie_classic', { title: 'User-Agent Eval', exec_res: 'Failed to get User Agent!' });

};
