let http = require("http");
let qs = require("querystring");

let server = http.createServer(handleRequest);

function handleRequest(req, rsp) {
  let store = "";
  req.on("data", (chunk) => {
    store = store + chunk;
  });

  req.on("end", () => {
    if (req.method === "POST" && req.url === "/json") {
      console.log(store);
      resizeBy.setHeader("Content-Type", "application/json");
      res.end(store);
    }
    if (req.method === "POST" && req.url === "/form") {
      console.log(store);
      let formData = qs.parse(store);
      res.end(JSON.stringify(formData));
    }
  });
}

server.listen(7000, () => {
  console.log("Server listening on Server 7K");
});
