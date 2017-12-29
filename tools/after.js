import fs from 'fs';

const style = `#contents {
  margin-left: 15%;
  margin-right: 15%;
  width: 70%
}
.ib {
  display:inline-block;
  width: 10%;
}
img {
  width: 100%;
}
img:hover {
  width: 200%;
}`,
styleTag = `<style>`,
closingStyleTag = `</style>`,
head = `<head>`,
body = `<body>`,
closingBody = `</body>`,
div = `<div id="contents">`,
closingDiv = `</div>`,
image = `<img class="ib" src="../images/logo_light.png">`,
header = `<h2 class="ib" >Thunderbolt</h2>`,
file = __dirname + '/../output/index.html';

fs.readFile(file, 'utf8', (err, data) => {
  let html = data.split(head)[0],
  end = data.split(head)[1],
  bodyContents = data.split(body)[1].split(closingBody)[0],
  arr = [];
  arr.push(html)
  arr.push(head)
  arr.push(styleTag)
  arr.push(style)
  arr.push(closingStyleTag)
  arr.push(
    end.split(body)[0] +
    body +
    div +
    image +
    header +
    closingDiv +
    div +
    bodyContents +
    closingDiv +
    closingBody +
    end.split(body)[1].split(closingBody)[1]
  )

  fs.writeFileSync(__dirname + '/../output/index.html', arr.join(''), { flag: 'w', encoding: 'utf8' });
})