var fs = require('fs'),
    stdin = process.stdin,
    stdout = process.stdout,
    cwd = process.cwd();

function read () {
  console.log('');
  stdout.write(' \033[33mEnter your choice: \033[39m');

  stdin.resume();
  stdin.setEncoding('utf8');
};

function file (i, files) {
  var filename = files[i];

  fs.stat(cwd + '/' + filename, function (err, stat) {
    if (stat.isDirectory()) {
      console.log(' ' + i + ' \033[36m' + filename + '/\033[39m');
    } else {
      console.log(' ' + i + ' \033[90m' + filename + '\033[39m');
    }

    if (++i === files.length) {
      read();
    } else {
      file(i, files);
    }
  });
};

function readdir (err, files) {
  console.log('');

  if (!files.length) {
    return console.log(' \033[31m No files to show!\033[39m\n');
  }

  console.log(' Select which file or directory you want to see\n');

  file(0, files);
};


fs.readdir(process.cwd(), readdir);
