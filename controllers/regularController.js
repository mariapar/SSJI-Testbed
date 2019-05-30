
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

    var addrDecoded = Buffer.from(addr, 'base64').toString('ascii');
    console.log('Addr Base64 decoded: ' + addrDecoded);
    var addrReEncoded = Buffer.from(addrDecoded, 'ascii').toString('base64');
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

function ping_an_address_quote(res, addr, template_name, template_title) {

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

    child = exec(ping_command + "'" + addr + "'",
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

function ping_an_address_double_quote(res, addr, template_name, template_title) {

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

    child = exec(ping_command + '\"' + addr + '\"',
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

function ping_an_address_from_a_json(res, addr, name, template_name, template_title) {

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

                var myResJson = {
                    'Execution Result': {
                        'Address': ['IP', addr],
                        'Done by': ['User', name],
                        'Result': ['Output', someOutput]
                    }
                };

                return res.render(template_name, { title: template_title, exec_res: JSON.stringify(myResJson)});
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

            var myResJson = {
                'Execution Result': {
                    'Address': ['IP', addr],
                    'Done by': ['User', name],
                    'Result': ['Output', exec_res]
                }
            };

            return res.render(template_name, {
                title: template_title,
                exec_res: JSON.stringify(myResJson)
            });

        });
}

function ping_an_address_from_a_json_blind(res, addr, template_name, template_title) {

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
                return res.render(template_name, { title: template_title, exec_res: 'The ip ' + addr + ' seems to be down!' });
            }

            console.log('stdout: |' + stdout + '|');
            console.log('stderr: |' + stderr + '|');

            return res.render(template_name, {
                title: template_title,
                exec_res: 'The ip ' + addr + ' seems to be up and running!'
            });

        });
}

function get_md5sum_of_string(res, someString, template_name, template_title) {

    var exec_res = 'Failed to Run...';

    child = exec('echo ' + someString + ' | md5sum',
        function (error, stdout, stderr) {
            if (error) {
                console.log(template_title + ' exec error: ' + error);
                return res.render(template_name, { title: template_title, exec_res: 'Failed to run command' });
            }

            console.log('stdout: |' + stdout + '|');
            console.log('stderr: |' + stderr + '|');

            return res.render(template_name, { title: template_title, exec_res: stdout });

        });
}

function ping_an_address_and_complain(res, addr, template_name, template_title) {

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
                return res.render(template_name, { title: template_title, exec_res: 'The ip ' + addr + ' seems to be down!' });
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
                exec_res: 'The ip ' + addr + ' seems to be up and running!'
            });

        });
  }
}

function ping_an_address_and_complain_dev_null(res, addr, template_name, template_title) {

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
        return res.render(template_name, { title: template_title, exec_res: 'This scenarios does not work in Windows!' });
    }

    child = exec(ping_command + addr + '> /dev/null &',
        function (error, stdout, stderr) {
            if (error) {
                console.log(template_name + ' exec error: ' + error);
                return res.render(template_name, { title: template_title, exec_res: 'The ip ' + addr + ' seems to be down!' });
            }

            console.log('stdout: |' + stdout + '|');
            console.log('stderr: |' + stderr + '|');

            return res.render(template_name, {
                title: template_title,
                exec_res: 'The ip ' + addr + ' seems to be up and running!'
            });

        });
  }
}

function ping_an_address_specific_format(res, addr, template_name, template_title) {

  if (addr === undefined) {
    console.log('Page load for ' + template_name);
    return res.render(template_name, { title: template_title });
  } else {
    console.log('User submitted addr: |' + addr + '|');

    if (addr.match(/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/) == null) {
        return res.render(template_name, { title: template_title, exec_res: 'Invalid IP address format.' });
    }

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

function ping_an_address_specific_format_blind(res, addr, template_name, template_title) {

  if (addr === undefined) {
    console.log('Page load for ' + template_name);
    return res.render(template_name, { title: template_title });
  } else {
    console.log('User submitted addr: |' + addr + '|');

    if (addr.match(/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/) == null) {
        return res.render(template_name, { title: template_title, exec_res: 'Invalid IP address format.' });
    }

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
                return res.render(template_name, { title: template_title, exec_res: 'The ip ' + addr + ' seems to be down!' });
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
                exec_res: 'The ip ' + addr + ' seems to be up and running!'
            });
        });
  }
}

exports.classic_get = function(req, res, next) {
  addr = req.query.addr;
  return ping_an_address(res, addr, 'regular_classic_get', 'Regular Classic GET Form');
};

exports.classic_post = function(req, res, next) {
  if (req.method === 'GET') { // Form fetching
    return res.render('regular_classic_post', { title: 'Regular Classic POST Form' });
  } else { // Form submitting
      addr = req.body.addr;
      return ping_an_address(res, addr, 'regular_classic_post', 'Regular Classic POST Form');
  }
};

exports.classic_b64_get = function(req, res, next) {
  addr = req.query.addr;
  return ping_an_address_b64(res, addr, 'regular_classic_get', 'Regular Classic Base64 GET Form');
};

exports.classic_b64_post = function(req, res, next) {
  if (req.method === 'GET') { // Form fetching
    return res.render('regular_classic_post', { title: 'Regular Classic Base64 POST Form' });
  } else { // Form submitting
      addr = req.body.addr;
      return ping_an_address_b64(res, addr, 'regular_classic_post', 'Regular Classic Base64 POST Form');
  }
};

exports.classic_hex_get = function(req, res, next) {
  addr = req.query.addr;
  return ping_an_address_hex(res, addr, 'regular_classic_get', 'Regular Classic Hex GET Form');
};

exports.classic_hex_post = function(req, res, next) {
  if (req.method === 'GET') { // Form fetching
    return res.render('regular_classic_post', { title: 'Regular Classic Hex POST Form' });
  } else { // Form submitting
      addr = req.body.addr;
      return ping_an_address_hex(res, addr, 'regular_classic_post', 'Regular Classic Hex POST Form');
  }
};

exports.classic_quote_get = function(req, res, next) {
  addr = req.query.addr;
  return ping_an_address_quote(res, addr, 'regular_classic_get', 'Classic single-quote example');
};

exports.classic_quote_post = function(req, res, next) {
  if (req.method === 'GET') { // Form fetching
    return res.render('regular_classic_post', { title: 'Classic single-quote example' });
  } else { // Form submitting
      addr = req.body.addr;
      return ping_an_address_quote(res, addr, 'regular_classic_post', 'Classic single-quote example');
  }
};

exports.classic_double_quote_get = function(req, res, next) {
  addr = req.query.addr;
  return ping_an_address_double_quote(res, addr, 'regular_classic_get', 'Classic double-quote example');
};

exports.classic_double_quote_post = function(req, res, next) {
  if (req.method === 'GET') { // Form fetching
    return res.render('regular_classic_post', { title: 'Classic double-quote example' });
  } else { // Form submitting
      addr = req.body.addr;
      return ping_an_address_double_quote(res, addr, 'regular_classic_post', 'Classic double-quote example');
  }
};

exports.classic_non_space_get = function(req, res, next) {
  addr = req.query.addr;

  if (addr !== undefined) {
    if (addr.match("\\s+") != null) {
      return res.render('regular_classic_post', { title: 'Classic non-space example', exec_res: 'No white spaces are allowed!' });
    }
  }

  return ping_an_address(res, addr, 'regular_classic_get', 'Classic non-space example');
};

exports.classic_non_space_post = function(req, res, next) {
  if (req.method === 'GET') { // Form fetching
    return res.render('regular_classic_post', { title: 'Classic non-space example' });
  } else { // Form submitting
      addr = req.body.addr;

      if (addr !== undefined) {
        if (addr.match("\\s+") != null) {
          return res.render('regular_classic_post', { title: 'Classic non-space example', exec_res: 'No white spaces are allowed!' });
        }
      }

      return ping_an_address(res, addr, 'regular_classic_post', 'Classic non-space example');
  }
};

exports.classic_blacklisting_get = function(req, res, next) {
  addr = req.query.addr;

  if (addr !== undefined) {
    if (addr.includes(';')) {
      addr = addr.replace(';', '');
    }

    if (addr.includes('&&')) {
      addr = addr.replace('&&', '');
    }

    if (addr.includes('|')) {
      addr = addr.replace('|', '');
    }

    if (addr.includes('`')) {
      addr = addr.replace('`', '')
    }

  }

  return ping_an_address(res, addr, 'regular_classic_get', 'Classic blacklisting example');
};

exports.classic_blacklisting_post = function(req, res, next) {
  if (req.method === 'GET') { // Form fetching
    return res.render('regular_classic_post', { title: 'Classic blacklisting example' });
  } else { // Form submitting
      addr = req.body.addr;

      if (addr !== undefined) {
        if (addr.includes(';')) {
          addr = addr.replace(';', '');
        }

        if (addr.includes('&&')) {
          addr = addr.replace('&&', '');
        }

        if (addr.includes('|')) {
          addr = addr.replace('|', '');
        }

        if (addr.includes('`')) {
          addr = addr.replace('`', '')
        }
      }

      return ping_an_address(res, addr, 'regular_classic_post', 'Classic blacklisting example');
  }
};

exports.classic_hash_get = function(req, res, next) {
  var someString = req.query.string;

  if (someString === undefined) {
    someString = '';
  }

  if (os.type().includes('Windows NT')) {
    return res.render('regular_classic_get', { title: 'Classic hashing example', exec_res: 'Invalid operating system.' });
  }

  return get_md5sum_of_string(res, someString, 'regular_classic_hash_get', 'Classic hashing example');
};

exports.classic_hash_post = function(req, res, next) {
  if (req.method === 'GET') { // Form fetching
    return get_md5sum_of_string(res, '', 'regular_classic_hash_post', 'Classic hashing example');
  } else { // Form submitting
      someString = req.body.string;

      if (someString === undefined) {
        someString = '';
      }

      if (os.type().includes('Windows NT')) {
        return res.render('regular_classic_get', { title: 'regular_classic_hash_post', exec_res: 'Invalid operating system.' });
      }

      return get_md5sum_of_string(res, someString, 'regular_classic_hash_post', 'Classic hashing example');

  }
};

exports.classic_basic_auth_get = function(req, res, next) {

  console.log('Login occurred successfully!');
  return exports.classic_get(req, res);
};

exports.classic_basic_auth_post = function(req, res, next) {

  console.log('Login occurred successfully!');
  return exports.classic_post(req, res);
};

exports.blind_get = function(req, res, next) {

  var addr = req.query.addr;

  if (addr === undefined) {
    return res.render('regular_classic_get', { title: 'Blind regular example' });
  }

  return ping_an_address_and_complain(res, addr, 'regular_classic_get', 'Blind regular example');
};

exports.blind_post = function(req, res, next) {

 var  addr = req.body.addr;

  if (addr === undefined) {
    return res.render('regular_classic_post', { title: 'Blind regular example' });
  }

  return ping_an_address_and_complain(res, addr, 'regular_classic_post', 'Blind regular example');
};

exports.double_blind_get = function(req, res, next) {

  var addr = req.query.addr;

  if (addr === undefined) {
    return res.render('regular_classic_get', { title: 'Blind regular example' });
  }

  return ping_an_address_and_complain_dev_null(res, addr, 'regular_classic_get', 'Blind regular example');
};

exports.double_blind_post = function(req, res, next) {

 var  addr = req.body.addr;

  if (addr === undefined) {
    return res.render('regular_classic_post', { title: 'Blind regular example' });
  }

  return ping_an_address_and_complain_dev_null(res, addr, 'regular_classic_post', 'Blind regular example');
};

exports.eval_get = function(req, res, next) {

  var user = req.query.user;

  if (user === undefined) {
    return res.render('regular_eval_get', { title: 'Eval regular example' });
  }

  var some_res = eval("\"Hello, " + user + "!\";");
  console.log('Eval returned: ' + some_res);

  return res.render('regular_eval_get', { title: 'Eval regular example', exec_res: some_res });
};

exports.eval_post = function(req, res, next) {

  console.log(req.body);

  var user = req.body.user;

  console.log('Provided user: |' + user + '|');

  if (user === undefined) {
    return res.render('regular_eval_post', { title: 'Eval regular example' });
  }

  var some_res = eval("\"Hello, " + user + "!\";");
  console.log('Eval returned: ' + some_res);

  return res.render('regular_eval_post', { title: 'Eval regular example', exec_res: some_res });
};

exports.eval_b64_get = function(req, res, next) {

    var user = req.query.user;

    if (user === undefined) {
        return res.render('regular_eval_get', { title: 'Eval B64 regular example' });
    }

    var userDecoded = Buffer.from(user, 'base64').toString('ascii');
    console.log('User Base64 decoded: |' + userDecoded + '|');
    var userReEncoded = Buffer.from(userDecoded, 'ascii').toString('base64');
    console.log('User Base64 re-encoded: ' + userReEncoded);

    var some_res = '';

    if (userReEncoded == user) {
        some_res = eval("\"Hello, " + userDecoded + "!\";");
        console.log('Eval returned: ' + some_res);
    } else {
        some_res = 'Please, encode your input to Base64 format.';
    }

    return res.render('regular_eval_get', { title: 'Eval regular example', exec_res: some_res });
};

exports.eval_b64_post = function(req, res, next) {

  var user = req.body.user;

  if (user === undefined) {
    return res.render('regular_eval_post', { title: 'Eval regular example' });
  }

    console.log('Received: |' + user + '|');
    var userDecoded = Buffer.from(user, 'base64').toString('ascii');
    console.log('User Base64 decoded: |' + userDecoded + '|');
    var userReEncoded = Buffer.from(userDecoded, 'ascii').toString('base64');
    console.log('User Base64 re-encoded: ' + userReEncoded);

    var some_res = '';

    if (userReEncoded == user) {
        some_res = eval("\"Hello, " + userDecoded + "!\";");
        console.log('Eval returned: ' + some_res);
    } else {
        some_res = 'Please, encode your input to Base64 format.';
    }

    return res.render('regular_eval_post', { title: 'Eval regular example', exec_res: some_res });
};

exports.classic_json_post = function(req, res, next) {

    var expected_data = req.body;

    var someAddr = null;
    var someName = null;
    var someOutput = '';

    if (expected_data !== undefined) {
        someName = expected_data.name;
        someAddr = expected_data.addr;

        if (someAddr != null) {
            return ping_an_address_from_a_json(res, someAddr, someName, 'regular_simple_display', 'Classic (JSON) regular example');
        }
    }

    var myResJson = {
        'Execution Result': {
            'Address': ['IP', someAddr],
            'Done by': ['User', someName],
            'Result': ['Output', someOutput]
        }
    };

    return res.render('regular_simple_display', { title: 'Classic (JSON) regular example', exec_res: JSON.stringify(myResJson) });
};

exports.blind_json_post = function(req, res, next) {

    var expected_data = req.body;

    var someAddr = null;

    if (expected_data !== undefined) {

        someAddr = expected_data.addr;

        console.log('Submitted addr: ' + someAddr);
        if (someAddr != null) {
            return ping_an_address_from_a_json_blind(res, someAddr, 'regular_simple_display', 'Blind (JSON) regular example');
        }
    }

    return res.render('regular_simple_display', { title: 'Blind (JSON) regular example', exec_res: 'The ip ' + someAddr + ' seems to be down!' });
};

exports.eval_json_post = function(req, res, next) {

    var expected_data = req.body;

    var someName = null;

    console.log(req.body);
    console.log(JSON.stringify(expected_data));

    if (expected_data !== undefined) {

        someName = expected_data.name;

        if (someName != null) {
            var myResJson = {
                'User': ['Name', eval("\"Hello, " + someName + "!\";")]
            };

            return res.render('regular_simple_display', { title: 'Eval (JSON) regular example', exec_res: JSON.stringify(myResJson) });
        }
    }

    var myResJson = {
        'User': ['Name', eval("\"Hello, " + null + "!\";")]
    };

    return res.render('regular_simple_display', { title: 'Eval (JSON) regular example', exec_res: JSON.stringify(myResJson) });
};

exports.preg_match_get = function(req, res, next) {
  var addr = req.query.addr;
  return ping_an_address_specific_format(res, addr, 'regular_classic_get', 'Preg_match() regular example GET Form');
};

exports.preg_match_post = function(req, res, next) {
  if (req.method === 'GET') { // Form fetching
    return res.render('regular_classic_post', { title: 'Preg_match() regular example POST Form' });
  } else { // Form submitting
      var addr = req.body.addr;
      return ping_an_address_specific_format(res, addr, 'regular_classic_post', 'Preg_match() regular example POST Form');
  }
};

exports.preg_match_blind_get = function(req, res, next) {
  var addr = req.query.addr;
  return ping_an_address_specific_format_blind(res, addr, 'regular_classic_get', 'Preg_match() blind example GET Form');
};

exports.preg_match_blind_post = function(req, res, next) {
  if (req.method === 'GET') { // Form fetching
    return res.render('regular_classic_post', { title: 'Preg_match() blind example POST Form' });
  } else { // Form submitting
      var addr = req.body.addr;
      return ping_an_address_specific_format_blind(res, addr, 'regular_classic_post', 'Preg_match() blind example POST Form');
  }
};

exports.str_replace_get = function(req, res, next) {

  var user = req.query.user;

  if (user === undefined) {
    return res.render('regular_eval_get', { title: 'Str_Replace() regular example' });
  }

  user = user.replace('\\', '');
  user = user.replace("'", "");
  user = user.replace('"', '');

  var some_res = eval("\"" + user + "\";");
  console.log('Str_Replace_Get returned: ' + some_res);

  return res.render('regular_eval_get', { title: 'Str_Replace() regular example', exec_res: some_res });
};

exports.str_replace_post = function(req, res, next) {

  var user = req.body.user;

  if (user === undefined) {
    return res.render('regular_eval_post', { title: 'Str_Replace() regular example' });
  }

  user = user.replace('\\', '');
  user = user.replace("'", "");
  user = user.replace('"', '');

  var some_res = eval("\"" + user + "\";");
  console.log('Str_Replace_Get returned: ' + some_res);

  return res.render('regular_eval_post', { title: 'Str_Replace() regular example', exec_res: some_res });
};

exports.create_function_get = function(req, res, next) {

    var user = req.query.user;

    if (user === undefined) {
        return res.render('regular_eval_get', { title: 'Create_Function() regular example' });
    }

    var myFunc = new Function("", "return \"Hello, " + user + "!\";");
    var some_res = myFunc('');

    console.log('Create_Function_Get returned: ' + some_res);

    return res.render('regular_eval_get', { title: 'Create_Function() regular example', exec_res: some_res });
};

exports.create_function_post = function(req, res, next) {

    var user = req.body.user;

    if (user === undefined) {
        return res.render('regular_eval_post', { title: 'Create_Function() regular example' });
    }

    var myFunc = new Function("", "return \"Hello, " + user + "!\";");
    var some_res = myFunc('');

    console.log('Create_Function_Post returned: ' + some_res);

    return res.render('regular_eval_post', { title: 'Create_Function() regular example', exec_res: some_res });
};
