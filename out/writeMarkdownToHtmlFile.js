'use strict';

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _getMarkdown = require('./getMarkdown.js');

var _getMarkdown2 = _interopRequireDefault(_getMarkdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ap = '\n---\n';
var wait = function wait(ms) {
  return new Promise(function (resolve) {
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
      end = new Date().getTime();
    }
    resolve(true);
  });
};

var readFile = function readFile(file, i, l, arr) {
  return new Promise(function (resolve, reject) {
    return _fs2.default.readFile(file, 'utf8', function (err, data) {
      if (err) throw err;
      if (data.split('@disabled').length === 2) return;
      if (i + 1 === l) final(data, arr);

      resolve(data);
    });
  });
};
var final = function final(data, arr) {
  return _fs2.default.readFile(__dirname + '/template.html', 'utf8', function (err, data) {
    if (err) throw err;

    var template = data.split('œœœ');

    write(arr.join(ap));
  });
};
var write = function write(data) {
  return _fs2.default.writeFileSync(__dirname + '/../input/index.md', data, { flag: 'w', encoding: 'utf8' });
};

var res = [];

(0, _getMarkdown2.default)().then(function (array) {
  return array.map(function (file, i) {
    return wait(500).then(function () {
      return readFile(file, i, array.length, res).then(function (data) {
        return res.push(data);
      });
    });
  });
});