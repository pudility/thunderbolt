'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});

var _glob = require('glob');

var _glob2 = _interopRequireDefault(_glob);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = function() {
  return new new Promise(function(resolve, reject) {
    (0, _glob2.default)('../markdown/**/*.md', options, function(er, files) {
      if (er) {
        reject(er);
      }
      resolve(files);
    });
  })();
};
('use strict');

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _getMarkdown = require('./getMarkdown');

var _getMarkdown2 = _interopRequireDefault(_getMarkdown);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var ap = '\n---\n';

var readFile = function readFile(file, i, l, arr) {
  return _fs2.default.readFile(file, function(err, data) {
    if (err) throw err;
    if (i === l) final(data, arr);

    return data;
  });
};

var final = function final(data, arr) {
  _fs2.default.readFile('./template.html', function(err, data) {
    if (err) throw err;

    var template = data.split('œœœ');

    write(template[0] + arr.join(ap) + template[1]);
  });
};

var write = function write(data) {
  return _fs2.default.writeFile('../index.html', data, function(err) {
    if (err) throw err;
    console.log('The file has been saved!');
  });
};

var res = [];

(0, _getMarkdown2.default)().then(function(array) {
  return array.map(function(file, i) {
    return res.push(readFile(file, i, array.length, res));
  });
});
