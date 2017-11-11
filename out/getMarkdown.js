'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _glob = require('glob');

var _glob2 = _interopRequireDefault(_glob);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var get = '{' + __dirname + '/../markdown/*.md,!node_modules}';

exports.default = function () {
  return new Promise(function (resolve, reject) {
    return (0, _glob2.default)(get, function (er, files) {
      if (er) {
        console.error(er);
        reject(er);
      }
      console.log('resolve', files);
      resolve(files);
    });
  });
};