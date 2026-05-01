const http = require('http')

const data = [];
let i = 0;

const backup = [];

const server = http.createServer('/', (req, res) => {
    if(req.url === '/updateUser' && req.method === 'GET'){
        console.log(time)
        data[i++] = i;
    } else if(req.url === '/saveLog' && req.method === 'GET'){
        console.log(data);
    } else if(req.url === '/backup' && req.method === 'POST'){
       backup = data;  
    } else if(req.url === '/clearLog' && req.method === 'GET') {
        data = [];
    } else if(req.url === '/serverInfo' && req.method === 'GET') {
        console.log({data});
    } else console.log("Welcome to Home Page")
}).listen(3000)

