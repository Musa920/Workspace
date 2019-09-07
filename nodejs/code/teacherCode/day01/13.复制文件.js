const fs = require("fs");

// 默认情况下，destination.txt 将创建或覆盖
fs.copyFile("./files/1.txt", "./files/1 - copy.txt", err => {
  if (err) throw err;
  console.log("source.txt was copied to destination.txt");
});