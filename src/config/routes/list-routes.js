import express from "express";
import { getAlltasks, createTasks } from "./controllers/list-controllers.js";

const listRouter = express.Router;

listRouter.get("/list", getAlltasks);
listRouter.post("list", createTasks);

export default listRouter;
