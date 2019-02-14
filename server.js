const Hapi = require('hapi');
const routes = require('./routes/routes');


const server = Hapi.server({
  port: 8080,
  host: 'localhost',
});

server.route(routes);

const startServer = async () => {
  if (!module.parent) {
    await server.start();
  }
  console.log(`Server running at: ${server.info.uri}`);
};


startServer();

module.exports = server;
