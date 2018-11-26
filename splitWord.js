function split() {
  var fs = require("fs");
  var text = fs.readFileSync("./12.txt").toString("utf-8");

  var textByLine = text.split(".");
  var i = Math.floor(Math.random() * textByLine.length);
  console.log(textByLine[i]);
}

