
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

function ping_an_address_with_quotes(res, addr, template_name, template_title) {

  var pre_phrase = 'Ping Results: ';

  if (addr === undefined) {
    return res.render(template_name, { title: template_title, exec_res: pre_phrase });
  } else {
    console.log('User submitted addr: |' + addr + '|');

    var exec_res = 'Failed to Run...';
    var ping_command = '/bin/ping -c 4 ';

    child = exec(ping_command + '\"' + addr + '\"',
        function (error, stdout, stderr) {
            if (error) {
                console.log(template_name + ' exec error: ' + error);
                return res.render(template_name, { title: template_title, exec_res: pre_phrase });
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
                exec_res: pre_phrase + exec_res
            });
        });
  }
}

exports.lax_domain_name = function(req, res, next) {
  if (req.method === 'GET') { // Form fetching
    return res.render('regular_classic_post', { title: 'Regex for domain name validation' });
  } else { // Form submitting
      var addr = req.body.addr;

      console.log(req.body);
      if (addr !== undefined) {
        var my_res = addr.match("^\\w+\\..*\\w+\\.\\w+$");
        if (addr.match("^\\w+\\..*\\w+\\.\\w+$") == null) {
          return res.render('regular_classic_post', { title: 'Regex for domain name validation', exec_res: 'Invalid domain format' });
        }
      } else {
        console.log('Addr is undefined');
        return res.render('regular_classic_post', { title: 'Regex for domain name validation', exec_res: 'Invalid domain format' });
      }

      return ping_an_address(res, addr, 'regular_classic_post', 'Regex for domain name validation');
  }
};

exports.nested_quotes = function(req, res, next) {
  if (req.method === 'GET') { // Form fetching
    return res.render('regular_classic_post', { title: 'Nested Quotes' });
  } else { // Form submitting
    var addr = req.body.addr;

    if (os.type().includes('Windows NT')) {
        return res.render(regular_classic_post, { title: 'Nested Quotes', exec_res: 'Invalid OS' });
    }

    return ping_an_address_with_quotes(res, addr, 'regular_classic_post', 'Nested Quotes');
  }
};

exports.no_colon_no_pipe_no_ampersand_no_dollar = function(req, res, next) {
  if (req.method === 'GET') { // Form fetching
    return res.render('regular_classic_post', { title: 'Regex filter for colon/pipe/ampersand/dollar' });
  } else { // Form submitting
      var addr = req.body.addr;

      if (addr !== undefined) {
        if (addr.match(";|\\||&|\\$") != null) {
          return res.render('regular_classic_post', { title: 'Regex filter for colon/pipe/ampersand/dollar', exec_res: 'Hack attempt detected!' });
        }
      }

      return ping_an_address(res, addr, 'regular_classic_post', 'Regex filter for colon/pipe/ampersand/dollar');
  }
};

exports.no_space = function(req, res, next) {
  if (req.method === 'GET') { // Form fetching
    return res.render('regular_classic_post', { title: 'Regex filter for spaces' });
  } else { // Form submitting
      var addr = req.body.addr;

      if (addr !== undefined) {
        if (addr.match(" ") != null) {
          return res.render('regular_classic_post', { title: 'Regex filter for spaces', exec_res: 'Invalid IP format.' });
        }
      }

      return ping_an_address(res, addr, 'regular_classic_post', 'Regex filter for spaces');
  }
};

exports.no_space_no_colon_no_pipe_no_ampersand = function(req, res, next) {

  if (req.method === 'GET') { // Form fetching
    return res.render('regular_classic_post', { title: 'Regex filter for space/colon/pipe/ampersand' });
  } else { // Form submitting
    var addr = req.body.addr;

    if (addr !== undefined) {
        if (addr.match(" ") != null) {
            return res.render('regular_classic_post', { title: 'Regex filter for space/colon/pipe/ampersand', exec_res: 'Invalid IP format.' });
        } else {
            if (addr.match(";|\\||&") != null) {
              return res.render('regular_classic_post', { title: 'Regex filter for space/colon/pipe/ampersand', exec_res: 'Hack attempt detected!' });
            }
        }
    }

    return ping_an_address(res, addr, 'regular_classic_post', 'Regex filter for space/colon/pipe/ampersand');
  }

};

exports.no_space_no_colon_no_pipe_no_ampersand_no_dollar = function(req, res, next) {

  if (req.method === 'GET') { // Form fetching
    return res.render('regular_classic_post', { title: 'Regex filter for space/colon/pipe/ampersand/dollar' });
  } else { // Form submitting
    var addr = req.body.addr;

    if (addr !== undefined) {
        if (addr.match(" ") != null) {
            return res.render('regular_classic_post', { title: 'Regex filter for space/colon/pipe/ampersand/dollar', exec_res: 'Invalid IP format.' });
        } else {
            if (addr.match("&|\\||;|\\$") != null) {
              return res.render('regular_classic_post', { title: 'Regex filter for space/colon/pipe/ampersand/dollar', exec_res: 'Hack attempt detected!' });
            }
        }
    }

    return ping_an_address(res, addr, 'regular_classic_post', 'Regex filter for space/colon/pipe/ampersand/dollar');
  }

};

exports.no_white_chars = function(req, res, next) {
  if (req.method === 'GET') { // Form fetching
    return res.render('regular_classic_post', { title: 'Regex filter for white chars' });
  } else { // Form submitting
      var addr = req.body.addr;

      if (addr !== undefined) {
        if (addr.match("\\s+") != null) {
          return res.render('regular_classic_post', { title: 'Regex filter for white chars', exec_res: 'Invalid IP format.' });
        }
      }

      return ping_an_address(res, addr, 'regular_classic_post', 'Regex filter for white chars');
  }
};

exports.no_white_chars_start_alphanum = function(req, res, next) {

  if (req.method === 'GET') { // Form fetching
    return res.render('regular_classic_post', { title: 'Alphanum for input start (filter for white chars)' });
  } else { // Form submitting
    var addr = req.body.addr;

    if (addr !== undefined) {
        if (addr.match("\\s+") != null) {
            return res.render('regular_classic_post', { title: 'Alphanum for input start (filter for white chars)', exec_res: 'Invalid IP format.' });
        } else {
            if (addr.match("^\\w+") == null) {
              return res.render('regular_classic_post', { title: 'Alphanum for input start (filter for white chars)', exec_res: 'Hack attempt detected!' });
            }
        }
    }

    return ping_an_address(res, addr, 'regular_classic_post', 'Alphanum for input start (filter for white chars)');
  }

};

exports.no_white_chars_stop_alnum = function(req, res, next) {

  if (req.method === 'GET') { // Form fetching
    return res.render('regular_classic_post', { title: 'Alphanum for input end (filter for white chars)' });
  } else { // Form submitting
    var addr = req.body.addr;

    if (addr !== undefined) {
        if (addr.match("\\s+") != null) {
            return res.render('regular_classic_post', { title: 'Alphanum for input end (filter for white chars)', exec_res: 'Invalid IP format.' });
        } else {
            if (addr.match("\\w+$") == null) {
              return res.render('regular_classic_post', { title: 'Alphanum for input end (filter for white chars)', exec_res: 'Hack attempt detected!' });
            }
        }
    }

    return ping_an_address(res, addr, 'regular_classic_post', 'Alphanum for input end (filter for white chars)');
  }

};

exports.simple_start_alphanum = function(req, res, next) {

  if (req.method === 'GET') { // Form fetching
    return res.render('regular_classic_post', { title: 'Alphanum for input start' });
  } else { // Form submitting
    var addr = req.body.addr;

    if (addr !== undefined) {
        if (addr.match("\\w+$") == null) {
            return res.render('regular_classic_post', { title: 'Alphanum for input start', exec_res: 'Hack attempt detected!' });
        } else {
            return ping_an_address(res, addr, 'regular_classic_post', 'Alphanum for input start');
        }
    }

  }

  return res.render('regular_classic_post', { title: 'Alphanum for input start', exec_res: 'Hack attempt detected!' });
};

exports.simple_stop_alphanum = function(req, res, next) {

  if (req.method === 'GET') { // Form fetching
    return res.render('regular_classic_post', { title: 'Alphanum for input end' });
  } else { // Form submitting
    var addr = req.body.addr;

    if (addr !== undefined) {
        if (addr.match("^\\w+") == null) {
            return res.render('regular_classic_post', { title: 'Alphanum for input end', exec_res: 'Hack attempt detected!' });
        } else {
            return ping_an_address(res, addr, 'regular_classic_post', 'Alphanum for input end');
        }
    }

  }

  return res.render('regular_classic_post', { title: 'Alphanum for input start', exec_res: 'Hack attempt detected!' });
};

exports.multiple_os_commands_blacklisting = function(req, res, next) {
  if (req.method === 'GET') { // Form fetching
    return res.render('regular_classic_post', { title: 'Regex filter for OS commands (Windows / *nix)' });
  } else { // Form submitting
      var addr = req.body.addr;

      if (addr !== undefined) {
        if (os.type().includes('Windows NT')) {
            if (addr.match("powershell|cmd") != null) {
              return res.render('regular_classic_post', { title: 'Regex filter for OS commands (Windows / *nix)', exec_res: 'Hack attempt detected!' });
            }
        } else {
            if (addr.match("echo|wget|nc|whoami|cat|ncat") != null) {
              console.log('Found banned command - Sorry!');
              return res.render('regular_classic_post', { title: 'Regex filter for OS commands (Windows / *nix)', exec_res: 'Hack attempt detected!' });
            }
        }
      }

      return ping_an_address(res, addr, 'regular_classic_post', 'Regex filter for OS commands (Windows / *nix)');
  }
};
