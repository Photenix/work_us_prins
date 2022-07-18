const jsonserver = require('json-server');
const server = jsonserver.create();
const router = jsonserver.router('data/products.json');
const middlewares = jsonserver.defaults();
server.use(middlewares);
server.use(router);
const port = process.env.PORT || 4321;

server.listen(port, () => {
    console.log('JSON Server is running');
})
