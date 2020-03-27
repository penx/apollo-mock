"use strict";
var fs = require("fs");

const { ApolloServer } = require("apollo-server");

const defaultMocks = require("./mocks");

async function createServer(port, schema, mocks) {
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

async function createApp({ schema, port = process.env.PORT || 10010, mocks = defaultMocks } = {}) {
  const server = await createServer(port, schema, mocks);
  return server;
}

module.exports = createApp;
