import express from "express";
import {
  createTasks,
  getAllTasks,
  deleteTasks,
  updateTasks,
  deleteCompletedTasks,
} from "../../contollers/list-controller.js";

const listRouter = express.Router();

listRouter.get("/list", getAllTasks);
listRouter.post("/list", createTasks);

listRouter.put("/list/:id", updateTasks);

listRouter.delete("/list/:id", deleteTasks);
listRouter.delete("/list", deleteCompletedTasks);

export default listRouter;
