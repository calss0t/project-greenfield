const knex = require("knex");
const knexConfig = require("./db/knexfile")
require('dotenv').config({path: "./.env.local"})

// const environment = process.env.DATABASE_URL ? "production" : "development";
const environment = process.env.NODE_ENV;

module.exports = knex(knexConfig[environment]);
