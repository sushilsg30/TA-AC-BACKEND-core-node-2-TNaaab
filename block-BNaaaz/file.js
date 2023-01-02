let http = require('http');
let fs = require('fs');


let server = http.createServer(handleRequest);

function handleRequest(req, resp) {
    resp.setHeader('Content-type', 'text/plain')
    fs.createReadStream('./readme.txt').pipe(resp);
}

server.listen(3000, () =>{
    console.log('Server listenig on 3000')
})