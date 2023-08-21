const http = require('http');

const server = http.createServer((req , res) => {
    if(req.url == '/') {
        res.write('<h1>Hello , Node.js! </h1>')
    }
    else if (req.url == '/about'){
        res.write('<h1> About Page! </h1>')
    }

    res.end();
})


server.listen(5023);

console.log('The HTTP server running on port 5000');