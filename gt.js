var glob = require("glob")

glob("{../*/*.md,!node_modules}", function (er, files) {
  console.log(er || files);
})