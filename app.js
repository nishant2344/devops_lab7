const http = require("http");
const VERSION = process.env.APP_VERSION || "v1.0.0";
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`<h1>ShopEasy Lite</h1><p>Status: Running</p><p>Version: <b>${VERSION}</b></p>`);
});
server.listen(3000, () => console.log(`ShopEasy Lite ${VERSION} running on port 3000`));
