
var async = require('async');
var os = require('os');
var exec = require('child_process').exec;
var child;

function ping_an_address(res, addr, template_name, template_title) {

  if (addr === undefined) {
    console.log('Page load for ' + template_name);
    return res.render(template_name, { title: template_title });
  } else {
    console.log('User submitted addr: |' + addr + '|');
    console.log(os.type()); // "Windows_NT"
    console.log(os.release()); // "10.0.14393"
    console.log(os.platform()); // "win32"

    var exec_res = 'Failed to Run...';
    var ping_command = '/bin/ping -c 4 ';

    if (os.type().includes('Windows NT')) {
        ping_command = 'ping ';
    }

    child = exec(ping_command + addr,
        function (error, stdout, stderr) {
            if (error) {
                console.log(template_name + ' exec error: ' + error);
                return res.render(template_name, { title: template_title });
            }

            console.log('stdout: |' + stdout + '|');
            console.log('stderr: |' + stderr + '|');

            exec_res = stdout;

            if (stdout.includes('\n')) {
                var lines = stdout.split('\n');
                for (var i = 0; i < lines.length; i++) {
                    if (lines[i].includes('rtt min/avg/max/mdev =')) {
                        exec_res = lines[i];
                        break;
                    }
                }
            }

            return res.render(template_name, {
                title: template_title,
                exec_res: exec_res
            });
        });
  }
}

function ping_an_address_b64(res, addr, template_name, template_title) {

  if (addr === undefined) {
    console.log('Page load for ' + template_name);
    return res.render(template_name, { title: template_title });
  } else {
    console.log('User submitted addr: |' + addr + '|');
    console.log(os.type()); // "Windows_NT"
    console.log(os.release()); // "10.0.14393"
    console.log(os.platform()); // "win32"

    var exec_res = 'Failed to Run...';
    var ping_command = '/bin/ping -c 4 ';

    if (os.type().includes('Windows NT')) {
        ping_command = 'ping ';
    }

    addrDecoded = Buffer.from(addr, 'base64').toString('ascii');
    console.log('Addr Base64 decoded: ' + addrDecoded);
    addrReEncoded = Buffer.from(addrDecoded, 'ascii').toString('base64');
    console.log('Addr Base64 re-encoded: ' + addrReEncoded);

    if (addrReEncoded == addr) {
        child = exec(ping_command + addrDecoded,
            function (error, stdout, stderr) {
                if (error) {
                    console.log(template_name + ' exec error: ' + error);
                    return res.render(template_name, { title: template_title });
                }

                console.log('stdout: |' + stdout + '|');
                console.log('stderr: |' + stderr + '|');

                exec_res = stdout;

                if (stdout.includes('\n')) {
                    var lines = stdout.split('\n');
                    for (var i = 0; i < lines.length; i++) {
                        if (lines[i].includes('rtt min/avg/max/mdev =')) {
                            exec_res = lines[i];
                            break;
                        }
                    }
                }

                return res.render(template_name, {
                    title: template_title,
                    exec_res: exec_res
                });
            });
    } else {
        return res.render(template_name, {
            title: template_title,
            exec_res: 'Please encode your input to Base64 format.'
        });
    }
  }
}

function ping_an_address_hex(res, addr, template_name, template_title) {

  if (addr === undefined) {
    console.log('Page load for ' + template_name);
    return res.render(template_name, { title: template_title });
  } else {
    console.log('User submitted addr: |' + addr + '|');
    console.log(os.type()); // "Windows_NT"
    console.log(os.release()); // "10.0.14393"
    console.log(os.platform()); // "win32"

    var exec_res = 'Failed to Run...';
    var ping_command = '/bin/ping -c 4 ';

    if (os.type().includes('Windows NT')) {
        ping_command = 'ping ';
    }

    addrDecoded = Buffer.from(addr, 'hex').toString('ascii');
    console.log('Addr Hex decoded: ' + addrDecoded);
    addrReEncoded = Buffer.from(addrDecoded, 'ascii').toString('hex');
    console.log('Addr Hex re-encoded: ' + addrReEncoded);

    if (addrReEncoded == addr) {
        child = exec(ping_command + addrDecoded,
            function (error, stdout, stderr) {
                if (error) {
                    console.log(template_name + ' exec error: ' + error);
                    return res.render(template_name, { title: template_title });
                }

                console.log('stdout: |' + stdout + '|');
                console.log('stderr: |' + stderr + '|');

                exec_res = stdout;

                if (stdout.includes('\n')) {
                    var lines = stdout.split('\n');
                    for (var i = 0; i < lines.length; i++) {
                        if (lines[i].includes('rtt min/avg/max/mdev =')) {
                            exec_res = lines[i];
                            break;
                        }
                    }
                }

                return res.render(template_name, {
                    title: template_title,
                    exec_res: exec_res
                });

            });
    } else {
        return res.render(template_name, {
            title: template_title,
            exec_res: 'Please encode your input to Hexademical format.'
        });
    }
  }
}

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

function ping_an_address_blind(res, addr, template_name, template_title) {

    var someOutput = '';

    console.log('User submitted addr: |' + addr + '|');
    console.log(os.type()); // "Windows_NT"
    console.log(os.release()); // "10.0.14393"
    console.log(os.platform()); // "win32"

    var exec_res = 'Failed to Run...';
    var ping_command = '/bin/ping -c 4 ';

    if (os.type().includes('Windows NT')) {
        ping_command = 'ping ';
    }

    child = exec(ping_command + addr,
        function (error, stdout, stderr) {
            if (error) {
                console.log(template_name + ' exec error: ' + error);
                return res.render(template_name, { title: template_title, exec_res: 'Oops ' + addr + ', you are dead beef :/' });
            }

            console.log('stdout: |' + stdout + '|');
            console.log('stderr: |' + stderr + '|');

            return res.render(template_name, {
                title: template_title,
                exec_res: 'Hey ' + addr + ', you are alive!'
            });

        });
}

exports.classic_get = function(req, res, next) {
  var cookie_name = "addr";

  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  if (ip.substr(0, 7) == "::ffff:") {
    ip = ip.substr(7)
  }

  var cookie_value = ip;

  let options = {
      expire: (new Date).getTime() + (86400 * 30)
  }

  // Set cookie
  res.cookie(cookie_name, cookie_value, options) // options is optional

  if (req.cookies.addr === undefined) {
      return res.render('cookie_classic', {
          title: 'Cookie Classic',
          exec_res: 'Cookie named addr is not set!'
      });
  }

  cookie_value = req.cookies.addr;
  return ping_an_address(res, cookie_value, 'cookie_classic', 'Cookie Classic');
};

exports.b64_get = function(req, res, next) {

  var cookie_name = "user";
  var cookie_value = Buffer.from('guest', 'ascii').toString('base64');

  let options = {
      expire: (new Date).getTime() + (86400 * 30)
  }

  // Set cookie
  res.cookie(cookie_name, cookie_value, options) // options is optional

  if (req.cookies.user === undefined) {
      return res.render('cookie_classic', {
          title: 'Cookie B64 Encoded example',
          exec_res: 'Cookie named user is not set!'
      });
  }

  return execute_cmd(res, "echo Hello, '" + Buffer.from(req.cookies.user, 'base64').toString('ascii') + "'!", 'cookie_classic', 'Cookie B64 Encoded example')
};

exports.blind_get = function(req, res, next) {

  var cookie_name = "addr";

  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  if (ip.substr(0, 7) == "::ffff:") {
    ip = ip.substr(7)
  }

  var cookie_value = ip;

  let options = {
      expire: (new Date).getTime() + (86400 * 30)
  }

  // Set cookie
  res.cookie(cookie_name, cookie_value, options) // options is optional

  if (req.cookies.addr === undefined) {
      return res.render('cookie_classic', {
          title: 'Cookie Blind',
          exec_res: 'Cookie named addr is not set!'
      });
  }

  cookie_value = req.cookies.addr;

  return ping_an_address_blind(res, cookie_value, 'cookie_classic', 'Cookie Blind');
};

exports.eval_get = function(req, res, next) {

  var cookie_name = "user";
  var cookie_value = "guest";

  let options = {
      expire: (new Date).getTime() + (86400 * 30)
  }

  // Set cookie
  res.cookie(cookie_name, cookie_value, options) // options is optional

  if (req.cookies.user === undefined) {
      return res.render('cookie_classic', {
          title: 'Cookie Eval',
          exec_res: 'Cookie named user is not set!'
      });
  }

  var some_res = eval("\"Hello, " + req.cookies.user + "!\";");

  console.log('Will return: |' + some_res + '|');

  return res.render('cookie_classic', {title: 'Cookie Eval', exec_res: some_res});

};
