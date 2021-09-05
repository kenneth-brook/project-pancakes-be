const knex = require("knex");
const parse = require("pg-connection-string").parse;


const pgconfig = parse(process.env.DATABASE_URL);

pgconfig.ssl = { rejectUnauthorized: false };
// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/database_file.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  },

  production: {
    client: 'pg',
    connection: pgconfig,
    migrations: {
      directory: __dirname + '/data/migrations'
    },
    seeds:{ 
      directory:  __dirname + '/data/seeds'
    },
  },

};
