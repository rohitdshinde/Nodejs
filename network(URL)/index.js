const http=require("http");
const fs=require("fs");
const url=require("url");

const myserver=http.createServer((req,res)=>{
    if(req.url==="/favicon.ico") return res.end();
    const log=`${Date.now()}:${req.url} "New page\n"`
    const myurl=url.parse(req.url,true) //if true query: [Object: null prototype] { myname: 'ROhit', otheris: '' },
    console.log(myurl);
    fs.appendFile("log.txt",log,(err,data)=>{
        switch(myurl.pathname){
            case'//':res.end("1st FILE")
            break;
            case'/info':
            const username=myurl.query.myname;
            res.end(`HII , ${username}`);
            break;
            case'/search':
            const search=myurl.query.search_query;
            res.end("Here are your results is  "+search)
            default:
                res.end("404 not OKKK")
        }
       
    })
})
myserver.listen(8000,()=>console.log("server start"))