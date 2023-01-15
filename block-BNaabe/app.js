let http = require("http");

let qs = require('querystring');

const handleRequest = (req, res) => {
  let store = " ";
  req.on("data", (chunk) => {
    store += chunk;
  });
  req.on("end", () => {
    if (req.method === "POST" && req.url === "/json") {
    //   req.setHeader("Content-Type", 'form-data');
      let parsedData = qs.parse(store);
      res.end(JSON.stringify(parsedData));
    }
  });
};

let serrver = http.createServer(handleRequest);

serrver.listen(9000, () => {
  console.log("Server Listening On port 9k");
});

// Q. Create server which can handle both json/form data without specifying which format of data is being received.
// - add listener on port 9000
// - use `data/end` event to capture json/form data
// - use `req.headers['Content-Type']` to check data format
// - parse respective data format i.e. json/form
// - send entire data in response
// - data sent from postman should have fields:
//   - city
//   - state
//   - country
//   - pin
