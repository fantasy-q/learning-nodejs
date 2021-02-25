/* renameFile.js */

const fs = require('fs');

function renameFile(base, oldName, newName) {
  // const fs = require('fs');

  String.prototype.insert = function (pos, newStr) {
    return this.slice(0, pos) + newStr + this.slice(pos);
  }

  fs.rename(base + oldName, base + newName, (err) => {
    if (err) {
      console.log(err);
    }
  })
}


module.exports = renameFile;