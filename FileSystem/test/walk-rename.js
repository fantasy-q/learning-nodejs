const fs = require("fs");
const path = require("path");

const dir = String.raw`D:\Codes\fantasy-q\sharp-jQuery\Ch1\\`;

fs.readdir(dir, function (err, files) {
  const regExp = new RegExp(/[0-9]-[0-9]+.+/);

  for (const file of files) {
    if (regExp.exec(file)) {
      const temNameArr = file.split(/-|：|\./);
      temNameArr[1] = temNameArr[1].padStart(2, 0);
      const oldName = dir + file;
      const newName = dir + temNameArr.join('-');
      const newFolder = temNameArr.length === 4 ?
        temNameArr.slice(0, -1).join('-') :
        temNameArr.join('-');

      // console.log(temNameArr);
      // console.log(oldName);
      // console.log(newFolder);

      // fs.mkdir(dir + newFolder, (err) => {
      //   if (err) {
      //     console.log(err);
      //   }
      // })


      fs.rename(oldName, dir + file.insert(3, '-'), (err) => {
        if (err) {
          console.log(err);
        }
      })
    }
  }
});

String.prototype.insert = function (start, newStr) {
  return this.slice(0, start) + newStr + this.slice(start);
}
