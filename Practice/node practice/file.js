const { error } = require("console");
const fs = require("fs");

//sync
// fs.writeFileSync('./test.txt','hey there kkkkl');

//async
// fs.writeFile('./test.txt','hey there mu', (err)=>{});


// const result=fs.readFileSync('test.txt','utf8');
// console.log(result)

// fs.readFile('./test2.txt','utf8',(err,result)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(result)
//     }
// });


// fs.readFile('./test2.txt','utf8',(err,result)=>{
//      err ? console.log(err) : console.log(result);
// })

// fs.appendFileSync('./test.txt',new Date().getDate().toLocaleString());


// fs.appendFileSync('./test.txt', 'koccoo','utf8')

fs.appendFile('./test.txt','loop',(err,result)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(result);
    }
})
