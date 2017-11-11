#!/bin/bash

npx babel tools --out-dir out --copy-files
node ./out/writeMarkdownToHtmlFile.js
generate-md --layout thomasf-solarizedcssdark --input ./input --output ./output
node ./out/after.js
open output/index.html