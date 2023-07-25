import pool from "../config/sql.js";

export const getAllTasks = async (_, res) => {
  try {
    const resultQuery = await pool.query("SELECT * FROM todos");
    const rows = resultQuery.rows;
    return res.status(200).json(rows);
  } catch (error) {
    return res.status(401).json(error);
  }
};

export const createTasks = async (req, res) => {
  try {
    const { task, completed } = req.body;
    const resultQuery = await pool.query(
      "INSERT INTO todos(task, completed) VALUES($1, $2)",
      [task, completed]
    );
    const row = resultQuery.rows[0];
    return res.status(201).json(row);
  } catch (error) {
    return res.status(401).json(error);
  }
};

export const deleteTasks = async (req, res) => {
  const id = +req.params.id;
  try {
    const resultQuery = await pool.query("DELETE FROM tasks WHERE id = $1", [
      id,
    ]);
    const row = resultQuery.rows[0];
    return res.status(201).json({ message: "Task deleted successfully" });
  } catch (error) {
    return res.status(401).json(error);
  }
};
