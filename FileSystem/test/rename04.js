const fs = require('./NodeFileSystem');

console.log(fs);

// const base = String.raw`D:\Codes\fantasy-q\sharp-jQuery\Ch4\\`;


// fs.readdir(base, (err, files) => {
//   for (const file of files) {
//     const oldName = base + file;
//     const newName = base + file.insert(4, '-');
//     // console.log(oldName);
//     fs.rename(oldName, newName, (err) => {
//       if (err) {
//         console.log(err);
//       }
//     })

//   }
// })

