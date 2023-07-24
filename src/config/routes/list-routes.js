import express from "express";

const listRouter = express.Router;

listRouter.get("/list", getalltasks);
listRouter.post("list", createTasks);

export default listRouter;
