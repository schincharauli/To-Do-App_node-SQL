import express from "express";
import { getAllTasks, createTasks } from "./controllers/list-controllers.js";

const listRouter = express.Router;

listRouter.get("/list", getAllTasks);
listRouter.post("/list", createTasks);

export default listRouter;
