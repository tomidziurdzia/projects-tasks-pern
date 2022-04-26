import express from "express";
import tasksRoutes from "./routes/task.routes.js";
import projectRoutes from "./routes/projects.routes.js";

const app = express();
app.use(express.json());

app.use(tasksRoutes);
app.use(projectRoutes);

export default app;
