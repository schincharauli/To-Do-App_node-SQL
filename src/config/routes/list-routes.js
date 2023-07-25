import express from "express";
import { Router as expressRouter } from "express";

import { createTasks, getAllTasks } from "../../contollers/list-controller.js";

const listRouter = expressRouter;

listRouter.get("/list", getAllTasks);
listRouter.post("/list", createTasks);

export default listRouter;
