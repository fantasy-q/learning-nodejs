const fs = require("fs");
const path = require("path");

main(process.argv);

async function* walk(dir) {
  for await (const d of await fs.promises.opendir(dir)) {
    const entry = path.join(dir, d.name);
    if (d.isDirectory()) yield* walk(entry);
    else if (d.isFile()) yield entry;
  }
}

// Then, use it with a simple async for loop
async function main(argv) {
  let DIR = argv[2] || "批量文件测试/";

  for await (const file of walk(DIR)) {
    const data = fs.readFileSync(file); //read existing contents into data
    const fd = fs.openSync(file, 'w+');

    const openTag = new Buffer.from('<script>\n');
    const closeTag = new Buffer.from('</script>\n');

    fs.writeSync(fd, openTag, 0, openTag.length, 0); //write new data
    fs.writeSync(fd, data, 0, data.length, openTag.length); //append old data
    fs.writeSync(fd, closeTag, 0, closeTag.length, data.length + openTag.length);

    fs.close(fd, (err) => {
      if (err) { console.log(err); }
    });
  }
}