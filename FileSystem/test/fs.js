const fs = require("fs");

// const path = 'D:/Codes/fantasy-q/css-secrets';

// const directory = fs.promises.opendir(path);

for (let i = 0; i < 8; i++) {
  fs.mkdir(path + '/Chapter' + (i + 1), { recursive: true }, (err, path) => {
    if (err) console.log(err);

  });
}

// console.log(directory);

