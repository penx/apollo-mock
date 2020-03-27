const Chance = require("chance");

const chance = new Chance();

const mocks = {
  DateTime: () => chance.timestamp()
};

module.exports = mocks;
