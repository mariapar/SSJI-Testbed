
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

function execute_cmd_and_complain(res, some_cmd, server_name, template_name, template_title) {
    
    var exec_res = 'Failed to Run...';

    child = exec(some_cmd,
        function (error, stdout, stderr) {
            if (error) {
                console.log(template_title + ' exec error: ' + error);
                return res.render(template_name, { title: template_title, exec_res: "Hey, what are you trying to do?!" });
            }

            console.log('stdout: |' + stdout + '|');
            console.log('stderr: |' + stderr + '|');

            return res.render(template_name, { title: template_title, exec_res: "Welcome to " + server_name + "!" });

        });
}


exports.classic_get = function(req, res, next) {
  var referer = req.get('Referrer');

  if (referer !== undefined) {
    console.log('Referer is: ' + referer);
    some_cmd = "echo It is always good to remember where you came from...\\(Referer: '" + referer + "'\\)";
    console.log("Will send command: " + some_cmd);
    return execute_cmd(res, some_cmd, 'cookie_classic', 'Referer Classic');
  } else {
    return res.render('cookie_classic', { title: 'Referer Classic', exec_res: 'Failed to locate referer URL!' });
  }

};

exports.blind_get = function(req, res, next) {

  if (os.type().includes('Windows NT')) {
    return res.render('cookie_classic', { title: 'Referer Blind', exec_res: 'Invalid operating system.' });
  } else {
    var server_name = req.headers.host;
    var referer = req.get('Referrer');

    if (referer !== undefined) {
      console.log('Referer is: ' + referer);
      var some_cmd = "echo '" + referer + "' | grep '" + server_name + "'";
      console.log("Will send command: " + some_cmd);
      return execute_cmd_and_complain(res, some_cmd, server_name, 'cookie_classic', 'Referer Blind');
    } else {
      return res.render('cookie_classic', { title: 'Referer Blind', exec_res: 'Failed to locate referer URL!' });
    }

  }

  return res.render('cookie_classic', { title: 'Referer Blind', exec_res: 'Failed to locate referer URL!' });

};

exports.eval_get = function(req, res, next) {
  var referer = req.get('Referrer');

  if (referer !== undefined) {
    console.log('Referer is: ' + referer);
    var some_res = eval("\"It's always good to remember where you came from! (" + referer + ")\"");
    console.log('Eval returned: ' + some_res);
    return res.render('cookie_classic', { title: 'Referer Eval', exec_res: some_res });
  } else {
    return res.render('cookie_classic', { title: 'Referer Eval', exec_res: 'Failed to locate referer URL!' });
  }

};
