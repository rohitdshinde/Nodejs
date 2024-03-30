// const http=require("http")

// const myserver=http.createServer((req,res)=>{
//     console.log("Refresh");
//     res.end("HElo")

// })

// myserver.listen(8000,()=>console.log("sever start"))

const http=require("http");
const fs=require("fs");


const myserver=http.createServer((req,res)=>{
const log=`${Date.now()}${req.url}:New created file\n"`
    fs.appendFile("log.txt",log,(err,data)=>{
        switch(req.url){
            case'/f':res.end("First File")
            break;
            case'/about':res.end("second File");
            break;
            case'//': res.end("helo ROhit ");
            break;
            default:res.end("404 End");
        }

       
    })
})

myserver.listen(8000)