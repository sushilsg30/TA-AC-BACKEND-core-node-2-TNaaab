let http = require('http');

let server = http.createServer(handleRequest);



function handleRequest(req, rsp) {
    let dataFormat = req.headers['content-type'];
    let store = '';
    req.on('data', (chunk) => {
        store = store + chunk;
    })

    req.on('end', () => {
        if(dataFormat === "application/json") {
            let parsedData = JSON.parse(store);
            resizeBy.end(parsedData);
        }
    })
}

server.listen(7000, () =>{
    console.log('Server listening on Server 7K');
});