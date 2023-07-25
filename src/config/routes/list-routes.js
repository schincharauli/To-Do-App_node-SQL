import express from "express";
import {
  createTasks,
  getAllTasks,
  deleteTasks,
} from "../../contollers/list-controller.js";

const listRouter = express.Router();

listRouter.get("/list", getAllTasks);
listRouter.post("/list", createTasks);
listRouter.delete("/list/:id", deleteTasks);

export default listRouter;
