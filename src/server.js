import { createTable } from "./config/sql.js";
import express from "express";

const app = express();

async function init() {
  try {
    await createTable();
    serverStart();
  } catch (error) {
    console.log(error);
  }
  function serverStart() {
    app.get("/", (req, res) => {
      return res.status(200).json({ message: "works!" });
    });
    app.listen(3000);
  }
}

init();
