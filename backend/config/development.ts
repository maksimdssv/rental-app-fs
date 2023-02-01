export const development = {
  username: process.env.POSTGRES_USER || 'postgres',
  password: process.env.POSTGRES_PASSWORD || 'mysecretpassword',
  database: process.env.POSTGRES_DB || 'postgres',
  port: Number(process.env.DB_PORT) || 5432,
  host: process.env.DB_HOST || 'localhost',
  dialect: 'postgres',
} as const;
