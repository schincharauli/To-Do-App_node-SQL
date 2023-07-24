import pgk from "pg";
const { Pool } = pgk;

const pool = new Pool({
  host: "dpg-civ6ikh5rnuhcnqud8hg-a",
  port: 5432,
  database: "todos_q6rb",
  user: "todos_q6rb_user",
  password: "fEzb8oBlmXJew36AyfqdLIE81TzDVc6j",
});

export const createTable = async () => {
  return await pool.query(
    "CREATE TABLE IF NOT EXISTS todos(id SERIAL PRIMARY KEY, task TEXT, completed Boolean)"
  );
};
