const fs = require('fs');

const base = String.raw`D:\Codes\fantasy-q\sharp-jQuery\Ch2\\`;


fs.readdir(base, (err, files) => {
  for (const file of files) {
    console.log(file);
    console.log();
  }
})

// for (let i = 0; i < 8; i++) {
//   fs.rename(base + (i + 1), base + '-' + (i + 1), (err) => {
//     if(err) {
//       console.log(err);
//     }
//   })
// }
