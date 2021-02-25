const fs = require("fs");
const path = require("path");


const dir = "D:\\Codes\\Web\\Book's Code\\Sharp-jQuery-Source-master\\Ch2";

async function* walk(dir) {
  for await (const d of await fs.promises.opendir(dir)) {

    console.log(d.name);

    const entry = path.join(dir, d.name);

    if (d.isDirectory()) {
      yield* walk(entry);
    } else if (d.isFile()) {
      yield entry;
    }
  }
}

// Then, use it with a simple async for loop
async function main() {
  for await (const p of walk(dir)) {
    // console.log(p);
  }
}

main();