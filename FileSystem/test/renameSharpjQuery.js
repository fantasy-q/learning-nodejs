const fs = require('fs');
const base = String.raw`D:\Codes\fantasy-q\sharp-jQuery`;

// renameByChapter(4, (base, oldName) => {
//   const newName = oldName.insert(0, '4-0');
//   fs.rename(base + oldName, base+newName, function (err) {
//     if (err) console.log(err);
//   });
// });

// renameByChapter(5, (base, oldName) => {
//   const arr = oldName.split('-');
//   // const regExp = new RegExp(/[0-9]+/);
//   arr[0] = arr[0].slice(4).padStart(2, 0);
//   const newName = 'demo' + arr.join('-');
//   return newName;
// })

function renameByChapter(chap, renameFunction) {
  const dir = base + `\\Ch${chap}\\`;

  fs.readdir(dir, function (err, files) {
    if (err) console.log(err);
    else for (const file of files) {
      const base = dir;
      const oldName = file;
      const newName = renameFunction(base, oldName);
      rename(base, oldName, newName);
    }
  })

}

String.prototype.insert = function (pos, newStr) {
  return this.slice(0, pos) + newStr + this.slice(pos);
}


function rename(base, oldName, newName){
  fs.rename(base + oldName, base + newName, function (err) {
    if (err) console.log(err);
  })
}