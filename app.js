"use strict";
var fs = require("fs");

const { ApolloServer } = require("apollo-server");

const mocks = require("./mocks");

async function createServer(port, schema) {
  const typeDefs = fs.readFileSync(schema, "utf8");

  const server = new ApolloServer({
    typeDefs,
    mocks
  });

  await server.listen(port).then(({ url }) => {
    console.log(`🚀 Mock API running at ${url}`);
  });

  return server;
}

async function createApp({ schema, port = process.env.PORT || 10010 } = {}) {
  const server = await createServer(port, schema);
  return server;
}

module.exports = createApp;
