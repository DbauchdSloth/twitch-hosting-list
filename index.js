var request = require('request');
var fs = require('fs');

// NOTE: see gulpfile.txt, out filename must match
var out = "host-list.txt";
var userId = 89269771;
var delimeter = ", ";
var url = "http://tmi.twitch.tv/hosts?include_logins=1&target=" + userId;

var users = [];

request(url, function(error, response, body) {
  if (!error && response.statusCode == 200) {
    var hosts = JSON.parse(body).hosts;
    var buffer = "";
    for (var i in hosts) {
      var username = hosts[i].host_login;
      users.push(username);
      buffer += username;
      if (i < hosts.length - 1) {
        buffer += delimeter;
      }
    }
    console.dir(buffer);

    fs.writeFile(out, buffer, function(err) {
      if (err) {
        return console.error(err);
      } else {
        return console.info("completed write to ./" + out);
      }
    });

  };
});
