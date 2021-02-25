const fs = require('fs');

const base = String.raw`C:\Users`


fs.readdir(base, (err, files) => {
  for (const file of files) {
    console.log(file);
    
  }
})

