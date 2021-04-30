const dbconfig = {
  type: 'postgres',
  url: process.env.URL,
  logging: true,
  entities: ['./src/models/*.{ts,js}'],
  migrations: ['./src/database/migrations/*.{ts,js}'],
  cli: {
    entitiesDir: './src/models',
    migrationsDir: './src/database/migrations',
  },
};

if (process.env.NODE_ENV !== 'dev') {
  dbconfig.entities = ['dist/models/*.{ts,js}'];
  dbconfig.migrations = ['dist/database/migrations/*.{ts,js}'];
  dbconfig.cli = {
    entitiesDir: 'dist/models',
    migrationsDir: 'dist/database/migrations',
  };
  dbconfig.ssl = true;
  dbconfig.extra = {
    ssl: {
      rejectUnauthorized: false,
    },
  };
}

module.exports = dbconfig;