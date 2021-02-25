let fs = require("fs");

main(process.argv);

function main(argv) {
/* 创建数量 */ let number = argv[2] || '1';
/* 扩展名称 */ let ext = argv[3] || 'txt';
/* 填充长度 */ let padLength = String(number).length;
  let dir = "批量文件测试/";
  fs.mkdir(dir, (err) => {
    if (err) console.log(err);
    else console.log(dir);
  });


  for (let i = 1; i <= number; i++) {
    let fileName = `${String(i).padStart(padLength, 0)}.${ext}`;
    fs.open(dir + fileName, "wx", function (err, fd) {
      // handle error
      if (err) console.log(err)
      else console.log(fileName)
      fs.close(fd, function (err) {
        // handle error
        if (err) console.log(err);
      });
    });
  }
}