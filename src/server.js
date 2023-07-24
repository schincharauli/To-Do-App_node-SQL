import bodyParser from "body-parser";
import pool, { createTable } from "./config/sql.js";
import express from "express";
import cors from "cors";

const app = express();

async function init() {
  try {
    await createTable();
    serverStart();
  } catch (error) {
    console.log(error);
  }
  function serverStart() {
    app.use(bodyParser.json());
    app.use(cors());
    app.get("/api/list", async (_, res) => {
      try {
        const resultQuery = await pool.query("SELECT * FROM todos");
        const rows = resultQuery.rows;
        return res.status(200).json(rows);
      } catch (error) {
        return res.status(401).json(error);
      }
    });

    app.post("/api/list", async (req, res) => {
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
    });
    app.listen(3000);
  }
}

init();
