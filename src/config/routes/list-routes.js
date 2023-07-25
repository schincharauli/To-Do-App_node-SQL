import express from "express";
import { createTasks, getAllTasks } from "../../contollers/list-controller.js";

const listRouter = express.Router;

listRouter.get("/list", getAllTasks);
listRouter.post("/list", createTasks);

export default listRouter;
