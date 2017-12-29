#!/bin/bash

npx babel tools --out-dir out --copy-files
node ./out/writeMarkdownToHtmlFile.js
generate-md --layout bootstrap3 --input ./input --output ./output
node ./out/after.js
# open index.html
surge --domain thunderbolt.blog
open 'http://thunderbolt.blog/output/index.html'
git add .
git commit -m "Update with new blog post"
git push -u origin master