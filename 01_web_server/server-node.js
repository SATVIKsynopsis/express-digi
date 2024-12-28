const http = require('http');


const hostname = '127.0.0.1'
const  port = 3001

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello World');
    } else if 
         (req.url === '/guffu') {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Heloo guffu');
    } else {
         
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/plain');
            res.end('404 Not Found');
    }
})


server.listen(port, hostname, () => {
    console.log(`Server is listening at http://${hostname}:${port}`)
})