var fs = require("fs");
var obj =JSON.parse(fs.readFileSync("people1.json"));
var obj2 = JSON.parse(fs.readFileSync("people2.json"));
var merger =[];
var arr = merger.concat(obj,obj2)
arr.sort();
console.log(arr);
arr.push();
 fs.writeFileSync('peopleComplete.txt',arr);

