module.exports = {
  client: "postgresql",
  connection: {
    database: "tasks",
    user: "postgres",
    password: "batata123",
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: "knex_migrations",
  },
};
