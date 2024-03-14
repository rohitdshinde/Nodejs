const fs = require("fs");

// 1) Created File
// fs.writeFile("sample.txt", "Hello file is created", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("File created Successfully !");
//   }
// });

// 2) Read File
// fs.readFile("./sample.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("File read Successfully !");
//     console.log(data);
//   }
// });

// // 3) Appended File
// fs.appendFile("./sample.txt", "i appended the file", (err) => {
//   if (err) console.log(err);
// });

// 4) Deleted File
fs.unlink("./sample.txt", (err) => {
  if (err) console.log(err);
  console.log("File removed Successfully! ");
});
