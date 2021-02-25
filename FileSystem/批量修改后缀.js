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
  let DIR = argv[2];
  let EXT = '.' + argv[3];
  // let P = path.parse(input);

  for await (const p of walk(DIR)) {
    let P = path.parse(p);
    let oldName = p;
    let newName = P.dir + '\\' + P.name + EXT;
    fs.rename(oldName, newName, function (err) { });
  }
}