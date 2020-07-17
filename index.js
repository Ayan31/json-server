// server.js
var jsonServer = require("./json-server");
var server = jsonServer.create();
var router = jsonServer.router("db.json");
var middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(db);
server.use(routes);
server.listen(3000, () => {
  console.log('JSON Server is running')
});
