'use strict';

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = '#contents {\n  margin-left: 15%;\n  margin-right: 15%;\n  width: 70%\n}\n.ib {\n  display:inline-block;\n  width: 10%;\n}\nimg {\n  width: 100%;\n}',
    styleTag = '<style>',
    closingStyleTag = '</style>',
    head = '<head>',
    body = '<body>',
    closingBody = '</body>',
    div = '<div id="contents">',
    closingDiv = '</div>',
    image = '<img class="ib" src="../images/logo_light.png">',
    header = '<h2 class="ib" >Thunderbolt</h2>',
    file = __dirname + '/../output/index.html';

_fs2.default.readFile(file, 'utf8', function (err, data) {
  var html = data.split(head)[0],
      end = data.split(head)[1],
      bodyContents = data.split(body)[1].split(closingBody)[0],
      arr = [];
  arr.push(html);
  arr.push(head);
  arr.push(styleTag);
  arr.push(style);
  arr.push(closingStyleTag);
  arr.push(end.split(body)[0] + body + div + image + header + closingDiv + div + bodyContents + closingDiv + closingBody + end.split(body)[1].split(closingBody)[1]);

  _fs2.default.writeFileSync(__dirname + '/../output/index.html', arr.join(''), { flag: 'w', encoding: 'utf8' });
});