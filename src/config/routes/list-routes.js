import express from "express";

const listRouter = express.Router;

listRouter.get("/list", getAlltasks);
listRouter.post("list", createTasks);

export default listRouter;
