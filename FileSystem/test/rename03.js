const fs = require('fs');
const path = require('path');

const base = String.raw`D:\Codes\fantasy-q\sharp-jQuery`;

function renameByChapter(chap, renameFunction) {
  const dir = base + `\\Ch${chap}\\`;

  fs.readdir(dir, function (err, files) {
    if (err) console.log(err);
    else for (const file of files) {
      const oldName = file;
      renameFunction(oldName);
    }
  })

}

renameByChapter(4, (oldName) => {
  const newName = file.insert(0, '4-0');
  fs.rename(oldName, newName, function (err) { });
});



String.prototype.insert = function (pos, newStr) {
  return this.slice(0, pos) + newStr + this.slice(pos);
}
