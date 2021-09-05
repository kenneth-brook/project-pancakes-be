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

  staging: {
    client: 'mysql',
    connection: {
      host : 'https://premium78.web-hosting.com/',
      user : 'tkbcwzsc_pancakes',
      password : 'Wizard1972!',
      database : 'tkbcwzsc_pancakes'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: {
      host : 'https://premium78.web-hosting.com/',
      user : 'tkbcwzsc_pancakes',
      password : 'Wizard1972!',
      database : 'tkbcwzsc_pancakes'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
