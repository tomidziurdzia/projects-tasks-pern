import express from "express";
import tasksRoutes from "./routes/task.routes.js";
import projectRoutes from "./routes/projects.routes.js";
import morgan from "morgan";
import cors from "cors";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use(tasksRoutes);
app.use(projectRoutes);

export default app;
