const knex = require('knex');

const config = require('./knexfile.js');

// we must select the development object from our knexfile
const db = knex(process.env.NODE_ENV) || knex(config.development);

// export for use in codebase
module.exports = db;