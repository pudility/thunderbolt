import glob from 'glob';

const get = '{' + __dirname + '/../markdown/*.md,!node_modules}';

export default () =>
  new Promise((resolve, reject) =>
    glob(get, function(er, files) {
      if (er) {
        console.error(er);
        reject(er);
      }
      console.log('resolve', files);
      resolve(files);
    })
  );
