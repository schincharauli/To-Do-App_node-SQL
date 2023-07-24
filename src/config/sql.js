import pgk from "pg";
const { Pool } = pgk;
import dotenv from "dotenv";

const pool = new Pool({
  host: process.env.POSTGRE_HOST,
  port: process.env.POSTGRE_PORT,
  database: process.env.POSTGRE_DATABASE,
  user: process.env.POSTGRE_USER,
  password: process.env.POSTGRE_PASSWORD,
});

export const createTable = async () => {
  return await pool.query(
    "CREATE TABLE IF NOT EXISTS todos(id SERIAL PRIMARY KEY, task TEXT, completed BOOLEAN)"
  );
};

export default pool;
