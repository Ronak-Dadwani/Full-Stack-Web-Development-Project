const http = require('http');

const server= http.createServer((req,res)=> {
    if(req.url == '/') {
        res.write('<h1>I am Happy to Learn Full Stack Web Development From PW Skills!</h1>')
    }
    res.end();
})

server.listen(2001);

console.log('The HTTP server is running seccessfully');