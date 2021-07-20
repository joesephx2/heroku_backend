// Update with your config settings.

module.exports = {


  development: {
    client: 'pg',
    connection: 'postgres://ieenzhhdvqzjpp:130b66ad17f28205e1889730a4619593d611e5ee27bea8f667273226c767d138@ec2-52-6-77-239.compute-1.amazonaws.com:5432/d6j420n8eu1vjg'
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
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
    connection: 'postgres://ieenzhhdvqzjpp:130b66ad17f28205e1889730a4619593d611e5ee27bea8f667273226c767d138@ec2-52-6-77-239.compute-1.amazonaws.com:5432/d6j420n8eu1vjg'
    ,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
