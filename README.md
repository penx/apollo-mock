# Apollo Mock

CLI utility to start a mock server based upon a GraphQL schema file.

Uses [Apollo Server](https://github.com/apollographql/apollo-server).

## Install

Inside the project where your spec file is:

```sh
npm init -y
npm install -d apollo-mock apollo-server
```

Then add a script in package.json such as:

```json
"scripts": {
    "mock": "apollo-mock ./schema.graphql"
}
```

And lastly run `npm run mock`.

## Usage

```
Usage: apollo-mock [options] <schema>

Options:
  -V, --version      output the version number
  -p, --port <n>     port to start the mock server on
  -m, --mocks <dir>  path to mocks JavaScript file
  -h, --help         display help for command
```
