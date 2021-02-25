## [Node.js Tutorial for Beginners](https://www.youtube.com/watch?v=TlB_eWDSMt4)

### Table of Content

- [What is Node](#what-is-node)
- [Node Architecture](#node-architecture)
- [How Node Works](#how-node-works)
- [Installing Node](#installing-node)
- [Your First Node Program](#your-first-node-program)
- [Node Module System](#node-module-system)
  - [Global Object](#global-object)
  - [Modules](#modules)
  - [Creating a Module](#creating-a-module)
  - [Loading a Module](#loading-a-module)
  - [Module Wrapper Function](#module-wrapper-function)
  - [Path Module](#path-module)
  - [OS Module](#os-module)
  - [File System Module](#file-system-module)
  - [Events Module](#events-module)
  - [HTTP Module](#http-module)

### What is Node

[Node.js®](https://nodejs.org/en/) is a JavaScript runtime built on [Chrome's V8 JavaScript engine](https://v8.dev/).

- `Node.js` 是一个在**浏览器外**执行 `Javascript` 代码的**<ruby><rb>运行环境</rb><rt>Runtime Environment</rt></ruby>**

- 用于构建**<ruby><rb>后端服务</rb><rt>Back-end Service</rt></ruby>** (又叫 `API`)

### Node Architecture

- 在 `Node` 之前, 只是在浏览器内使用 `Javascript` 

- `Javascript Engine` 

  | Browser        | Engine       |
  | -------------- | ------------ |
  | Microsoft Edge | Chakra       |
  | Firefox        | SpiderMonkey |
  | Chrome         | V8           |

- `Node` 不是**<ruby><rb>程序设计</rb><rt>Programming</rt><rb>语言</rb><rt>Language</rt></ruby>**, 也不是**<ruby><rb>框架</rb><rt>Framework</rt></ruby>**, 是**<ruby><rb>运行环境</rb><rt>Runtime Environment</rt></ruby>**

### How Node Works

- **<ruby><rb>非阻塞</rb><rt>Non-blocking</rt></ruby>** or **<ruby><rb>异步</rb><rt>Asynchronous</rt></ruby>** by default
- **<ruby><rb>单线程</rb><rt>Single Thread</rt></ruby>**

- Node is ideal for **I/O-intensive** apps
  - 适合大量的硬盘读写或网络请求

- Do **not** use Node for **CPU-intensive** apps
  - 不适合视频编码或图片处理服务

### Installing Node

1. 检查版本 `$node --version`
2. 去 [Node.js](https://nodejs.org/en/) 安装 `LTS` 版本

### Your First Node Program

```
$mkdir first-app
$cd first-app
// open in VScode
$code .
$node app.js
```

- `Node` 是一个包含 `V8` 引擎的 `C++` 程序

### Node Module System

内置模组: `os`, `fs`, `events` and `http` etc.

#### Global Object

- `Node` 没有 `window`, 取而代之的是 `global`
- 全局变量不会添加到 `global`, 作用域是文件

#### Modules

**Modularity**

- `Node` 里的每个**文件**被看作是一个 `module` 对象
  - 文件里定义的变量都只**<ruby><rb>作用于</rb><rt>scoped to</rt></ruby>**该文件, 用面向对象的话来说, 他们是**<ruby><rb>私有</rb><rt>Private</rt></ruby>**的
  
  - 如果想在其他文件使用, 必须显式**<ruby><rb>导出</rb><rt>export</rt></ruby>**, 让它变成**<ruby><rb>公共</rb><rt>Public</rt></ruby>**的

- 每个 `Node Application` 至少有一个文件或模组, 叫它主模组

#### Creating a Module

```js
/* exports */
// A
module.exports = log;
// B
module.exports.log = log;
```

#### Loading a Module

```js
/* imports */
// A
const log = require('./logger.js');
log('message');
// B
const logger.log = require('./logger.js');
logger.log('message');
```

#### Module Wrapper Function

```js
(function (exports, require, module, __filename, __dirname) {
	// module
})
```

- `Node` 不会直接执行模组里的代码, 而是通过一个函数包裹起来

#### Path Module

- `Node` [文档](https://nodejs.org/en/docs/) 的 `API` 页面列出了内置模组, 其中比较重要的
  - `File System`
  - `HTTP` 
  - `OS` 
  - `Path` 
  - `Process` 
  - `Query String`
  - `Stream`

```js
const path = require('path');
var pathObj = path.parse(__filename);
console.log(pathObj);
```

#### OS Module

```js
const os = require('os');
var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);
```

- `Node` 之前不能使用 `Javascript` 获取**操作系统**信息
  - `Javascript` 运行在浏览器里, 只能操作 `window` 或 `document`
  - `Node` 让 `Javascript` 运行在**浏览器外**, 或者说在**服务器**里

#### File System Module

```js
const fs = require('fs');

const files = fs.readdirSync('./');
console.log(files);

fs.readdir('./', function (err, files) {
  if (err) console.log('Error:', err);
  else console.log('Result:', files);
});

// Error
fs.readdir('$', function (err, files) {
  if (err) console.log('Error:', err);
  else console.log('Result:', files);
});
```

#### Events Module

- `Event` 是一个某件事发生了的**<ruby><rb>信号</rb><rt>signal</rt></ruby>**

```js
const EventEmitter = require('events');
const emitter = new EventEmitter();

// Register a listener
emitter.on('messageLogged', function () {
  console.log('Listener called!');
})

// Raise an event
emitter.emit('messageLogged');
```

- `Event Arguments` : 通过 `Event` 传递数据

#### HTTP Module

```js
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Hello World');
    res.end();
  }

  if (req.url === '/api/courses') {
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }
});

server.listen(3000);

console.log('Listenning on port 3000...');
```





