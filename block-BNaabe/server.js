let path = require("path");

let http = require("http");

let absolutePath = __dirname;

// console.log(absolutePath);
let absolutePathOfApp = path.join(__dirname, "app.js");

// console.log(absolutePathOfApp);

const relativePathOfIndex = "./index.js";
let absolutePathOfIndex = path.join(__dirname, "index.html");
// console.log(relativePathOfIndex);

// console.log(absolutePathOfIndex);

const handleRequest = (req, res) => {
  let store = " ";
  req.on("data", (chunk) => {
    store += chunk;
  });
  req.on("end", () => {
    if (req.method === "POST" && req.url === "/json") {
      console.log(store);
      res.end(store.captain);
    }
  });
};

let serrver = http.createServer(handleRequest);

serrver.listen(5000, () => {
  console.log("Server Listening On port 5k");
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