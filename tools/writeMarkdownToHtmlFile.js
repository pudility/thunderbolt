import fs from 'fs';
import getMD from './getMarkdown.js';

const ap = '\n---\n';
const wait = (ms) => new Promise((resolve) => {
  let start = new Date().getTime();
  let end = start;
  while(end < start + ms) {
    end = new Date().getTime();
  }
  resolve(true);
});

const readFile = (file, i, l, arr) =>
  new Promise((resolve, reject) =>
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) throw err;
      if (i + 1 === l) final(data, arr);

      resolve(data);
    })
  );
const final = (data, arr) =>
  fs.readFile(__dirname + '/template.html', 'utf8', (err, data) => {
    if (err) throw err;

    let template = data.split('œœœ');

    write(arr.join(ap));
  });
const write = data =>
  fs.writeFileSync(__dirname + '/../input/index.md', data, { flag: 'w', encoding: 'utf8' });

let res = [];

getMD().then(array =>
  array.map((file, i) =>
    wait(500).then(() => readFile(file, i, array.length, res).then(data => res.push(data)))
  )
);
